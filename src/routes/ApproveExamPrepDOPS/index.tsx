import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import FormDate from './components/FormDate';
import { useState } from 'react';
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

const ApproveExamPrepDOPS = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = location?.state as { examId: string };
  const { detailExam } = useGetExamPrepDetails(examId);
  const { createApprovalExamPrep, loading } = useApproveExamPrep();

  console.log('999 ini exam', { detailExam });

  const [date, setDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const [locationApproval, setLocation] = useState('');
  const [supervisi, setSupervisi] = useState('');
  const [globalRating, setGlobalRating] = useState('');
  const [feedback, setFeedback] = useState(false);
  const [kesulitan, setKesulitan] = useState('');

  const handleSubmit = async () => {
    console.log(date);
    const response = await createApprovalExamPrep({
      examPreparationId: detailExam?.id || '',
      procedure: procedure,
      location: locationApproval,
      supervision: supervisi,
      globalRating: globalRating,
      feedbackGiven: feedback,
      difficulty: kesulitan,
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

  return (
    <Flex direction="column">
      <Header title={`Approve DOPS-${detailExam?.id.substring(0, 4)}`} />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} initialValue={detailExam?.createdDate} />
        <FormResiden initialValue={detailExam?.assessorName || ''} />
        <FormTahapan initialValue={detailExam?.userCurrentCompetence || ''} />
        <FormProcedure
          initialValue={detailExam?.procedure || ''}
          setProcedure={setProcedure}
        />
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
