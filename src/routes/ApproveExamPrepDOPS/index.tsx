import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import FormDate from './components/FormDate';
import { useEffect, useState } from 'react';
import FormResiden from './components/FormResiden';
import FormTahapan from './components/FormTahapan';
import useGetExamPrepDetails from './hooks/useExamPrepDetails';
import FormProcedure from './components/FormProcedure';
import FormLocation from './components/FormLocation';
import FormSupervisi from './components/FormSupervisi';
import FormGlobalRating from './components/FormGlobalRating';
import FormFeedback from './components/FormFeedback';
import useApproveExamPrep from './hooks/useApproveExamPrep';
import FormKesulitan from './components/FormKesulitan';
import { useAddCasesContext } from '../AddCases/contexts';
import FormOperation from './components/FormOperation';
import useGetCasesForm from '../../hooks/useGetCasesForm';

const ApproveExamPrepDOPS = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { examId, type } = location?.state as { examId: string; type: string };
  const { detailExam } = useGetExamPrepDetails(examId);
  const { createApprovalExamPrep, loading } = useApproveExamPrep();
  const { selectedOperation } = useAddCasesContext();
  const { casesForm } = useGetCasesForm();

  const [date, setDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const [locationApproval, setLocation] = useState('');
  const [supervisi, setSupervisi] = useState('');
  const [globalRating, setGlobalRating] = useState('');
  const [feedback, setFeedback] = useState(false);
  const [kesulitan, setKesulitan] = useState('');
  const isAlman = type === 'alman';
  const isAcex = type === 'acex';

  const validateForm = (): boolean => {
    if (isAlman) {
      return locationApproval === '' || feedback === false || date === '';
    }

    return (
      procedure === '' ||
      locationApproval === '' ||
      feedback === false ||
      date === '' ||
      selectedOperation.length === 0
    );
  };

  const handleSubmit = async () => {
    const selectedOperationId = selectedOperation.map(
      (operation) => operation.id,
    );

    console.log({ procedure, locationApproval, feedback, date });
    if (validateForm()) {
      toast({
        title: `Gagal Approve Ujian`,
        description: 'Harap isi semua form',
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    const response = await createApprovalExamPrep({
      examPreparationId: detailExam?.id || '',
      supervision: supervisi,
      location: locationApproval,
      globalRating: globalRating,
      feedbackGiven: feedback,
      difficulty: kesulitan,
      ...(!isAlman ? { procedure: procedure } : {}),
      ...(!isAlman ? { procedure: procedure } : {}),
      ...(isAcex ? { operationTypeIds: selectedOperationId } : {}),
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: `Berhasil Approve Ujian`,
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
        title: `Gagal Approve Ujian`,
        description: response?.message[0],
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const getTitleHeader = () => {
    switch (type) {
      case 'dops':
        return 'DOPS';
      case 'alman':
        return 'ALMAN';
      case 'acex':
        return 'ACEX';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (detailExam) {
      setProcedure(detailExam?.procedure || '');
      setLocation(detailExam?.approvalLocation || '');
      setDate(detailExam?.createdDate || '');
    }
  }, [detailExam]);

  return (
    <Flex direction="column">
      <Header
        title={`Approve ${getTitleHeader()}-${detailExam?.id.substring(0, 4)}`}
      />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} initialValue={detailExam?.createdDate} />
        <FormResiden initialValue={detailExam?.assessorName || ''} />
        <FormTahapan initialValue={detailExam?.userCurrentCompetence || ''} />
        {isAcex && <FormOperation formData={casesForm?.operationTypes} />}

        {!isAlman && (
          <FormProcedure
            initialValue={detailExam?.procedure || ''}
            setProcedure={setProcedure}
          />
        )}
        <FormLocation
          initialValue={detailExam?.approvalLocation}
          setLocation={setLocation}
        />
        <FormSupervisi setSupervisi={setSupervisi} />
        <FormGlobalRating setGlobalRating={setGlobalRating} />
        <FormKesulitan setKesulitan={setKesulitan} />
        <FormFeedback setFeedback={setFeedback} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ApproveExamPrepDOPS;
