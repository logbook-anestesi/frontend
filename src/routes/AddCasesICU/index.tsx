import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormDate from '../AddCases/components/FormDate';
import FormDPJP from '../AddCases/components/FormDPJP';
import FormNotes from '../AddCases/components/FormNotes';
import { colors } from '../../constants/colors';
import { useAddCasesContext, useAddCasesDispatch } from '../AddCases/contexts';
import { useEffect } from 'react';
import useGetCasesForm from '../../hooks/useGetCasesForm';
import useAddCases from '../AddCases/hooks/useAddCases';
import FormTypeProcedure from '../AddCases/components/FormTypeProcedure';
import FormSupervised from '../AddCases/components/FormSupervised';
import FormAdditionalTags from '../AddCases/components/FormAdditionalTags';
import FormRadioLocationICU from './components/FormLocationICU';
import { useNavigate } from 'react-router-dom';
import FormDiagnoses from './components/FormDiagnoses';
import FormLocationLainnya from '../AddCases/components/FormLocationLainnya';

const AddCaseICU = () => {
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
      diagnoseIds: state.diagnoseIds,
      ...(state?.location !== '' ? { location: state.location } : {}),
      ...(state?.tagIds.length !== 0 ? { tagIds: state.tagIds } : {}),
      ...(state?.notes !== '' ? { notes: state.notes } : {}),
      ...(state?.procedureTypeIds.length !== 0
        ? { procedureTypeIds: state.procedureTypeIds }
        : {}),
      ...(state?.supervisorIds.length !== 0
        ? { superviseeIds: state.supervisorIds }
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

      navigate(-1);
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
        caseType: 'ICU',
      },
    });
  }, [casesDispatch]);

  return (
    <Flex flexDirection="column">
      <Header title="Tambah ICU" />

      <Flex padding="10px 30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadioLocationICU />

        {state.isShowLocationLainnya && <FormLocationLainnya />}

        <FormDiagnoses diagnoseList={casesForm?.diagnoses || []} />
        <FormTypeProcedure procedureList={casesForm?.procedureTypes || []} />
        <FormSupervised />
        <FormAdditionalTags />
        <FormNotes />

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

export default AddCaseICU;
