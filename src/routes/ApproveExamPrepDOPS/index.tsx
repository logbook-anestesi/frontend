import { Button, Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useLocation } from 'react-router-dom';
import FormDate from './components/FormDate';
import { useState } from 'react';
import { ExamPreparation } from '../Exam/hooks/useGetAllExamPreparation/types';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';
import FormAsesor from './components/FormAsesor';

const ApproveExamPrepDOPS = () => {
  const location = useLocation();
  const { exam } = location?.state as { exam: ExamPreparation };

  console.log('999 ini exam', { exam });

  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();

  const handleSubmit = async () => {
    console.log('999 submit', { date, asesor });
  };

  return (
    <Flex direction="column">
      <Header title={`Approve DOPS-${exam.id.substring(0, 4)}`} />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} initialValue={exam.createdDate} />
        <FormAsesor setAsesor={setAsesor} initialValue={exam.assessorName} />

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
