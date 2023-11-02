import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import RadioPenilaian from './components/RadioPenilaian';
import TextPenilaian from './components/TextPenilaian';
import { colors } from '../../constants/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import useAddApproval from './hooks/useAddApproval';
import { useApprovingProcess, useApprovingProcessDispatch } from './contexts';
import { useEffect } from 'react';

const ApprovingProcess = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { notes, rate } = useApprovingProcess();
  const { isReject, caseData } = location?.state;
  const { createApproval, loading } = useAddApproval();
  const approvingProcessDispatch = useApprovingProcessDispatch();

  const handleSubmitForm = async () => {
    const response = await createApproval({
      caseId: caseData?.id,
      notes: notes,
      ...(isReject ? {} : { rate: rate }),
      status: isReject ? 'REJECTED' : 'APPROVED',
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: `Berhasil ${isReject ? 'Reject' : 'Approve'} Case`,
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate('/review/cases');
      return;
    }

    if (!response?.success) {
      toast({
        title: `Failed ${isReject ? 'Reject' : 'Approve'} Case`,
        description: response?.message[0],
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    approvingProcessDispatch({
      type: 'reset',
    });
  }, [approvingProcessDispatch]);

  return (
    <Flex flexDirection="column">
      <Header
        title={`${
          isReject ? 'Reject' : 'Approve'
        } ${caseData?.caseType} - ${caseData?.id.substring(0, 4)}`}
      />

      <Flex padding="10px 30px" direction="column" gap="16px">
        {!isReject && <RadioPenilaian />}
        <TextPenilaian />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={10}
          onClick={handleSubmitForm}
          isLoading={loading}
        >
          {isReject ? 'Reject' : 'Approve'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ApprovingProcess;
