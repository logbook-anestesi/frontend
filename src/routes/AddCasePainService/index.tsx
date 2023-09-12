import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useAddCasesContext, useAddCasesDispatch } from '../AddCases/contexts';
import { useEffect } from 'react';
import useAddCases from '../AddCases/hooks/useAddCases';
import { useNavigate } from 'react-router-dom';
import FormDate from '../AddCases/components/FormDate';
import FormLocationLainnya from '../AddCases/components/FormLocationLainnya';
import FormTypePainService from './components/FormTypePainService';
import useGetCasesForm from '../../hooks/useGetCasesForm';
import FormProcedurePainService from './components/FormProcedurePainService';
import FormDPJP from '../AddCases/components/FormDPJP';

const AddCasePainService = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const casesDispatch = useAddCasesDispatch();
  const { createCases, loading } = useAddCases();

  const state = useAddCasesContext();

  const handleSubmitForm = async () => {
    const response = await createCases({
      date: state.date,
      caseType: state.caseType,
      dpjpUserId: state.dpjpUserId,
      ...(state?.location !== '' ? { location: state.location } : {}),
      ...(state?.procedurePainServiceIds.length !== 0
        ? { painServiceProcedureIds: state.procedurePainServiceIds }
        : {}),
      ...(state?.typePainServiceIds.length !== 0
        ? { painServiceTypeIds: state.typePainServiceIds }
        : {}),
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Case Berhasil Dibuat',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate('/cases');
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Add Cases',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // reset state and change case type when first render page
  useEffect(() => {
    casesDispatch({
      type: 'reset_state',
      data: {},
    });

    casesDispatch({
      type: 'set_case_type',
      data: {
        caseType: 'PAIN_SERVICE',
      },
    });
  }, [casesDispatch]);

  return (
    <Flex flexDirection="column">
      <Header title="Tambah Pain Service" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormLocationLainnya />
        <FormDPJP />
        <FormTypePainService
          painServiceTypes={casesForm?.painServiceTypes || []}
        />
        <FormProcedurePainService
          painServiceProcedure={casesForm?.painServiceProcedures || []}
        />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          isLoading={loading}
          onClick={handleSubmitForm}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCasePainService;
