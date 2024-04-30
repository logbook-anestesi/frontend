import { Button, Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useLocation } from 'react-router-dom';
import FormDate from './components/FormDate';
import { useState } from 'react';
import FormResiden from './components/FormResiden';
import FormTahapan from './components/FormTahapan';
import useGetExamPrepDetails from './hooks/useExamPrepDetails';

const ApproveExamPrepDOPS = () => {
  const location = useLocation();
  const { examId } = location?.state as { examId: string };
  const { detailExam } = useGetExamPrepDetails(examId);

  console.log('999 ini exam', { detailExam });

  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    console.log('999 submit', { date });
  };

  return (
    <Flex direction="column">
      <Header title={`Approve DOPS-${detailExam?.id.substring(0, 4)}`} />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} initialValue={detailExam?.createdDate} />
        <FormResiden initialValue={detailExam?.assessorName || ''} />
        <FormTahapan initialValue={detailExam?.userCurrentCompetence || ''} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleSubmit}
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ApproveExamPrepDOPS;
