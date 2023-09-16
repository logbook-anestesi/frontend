import { Button, Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormExam from './components/FormExam';
import { useState } from 'react';
import FormRadioExamType from './components/FormRadioExamType';
import FormPenguji from './components/FormPenguji';
import { colors } from '../../constants/colors';

const ExamAdd = () => {
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [pengujiId, setPengujiId] = useState('');

  console.log('999 hasil perubahan', { exam, examType, pengujiId });

  return (
    <Flex direction="column">
      <Header title="Buat Exam" />

      <Flex padding="30px" direction="column" gap="16px">
        <FormExam setExam={setExam} />
        <FormRadioExamType setExamType={setExamType} />
        <FormPenguji setPengujiId={setPengujiId} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          // onClick={handleSubmitForm}
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>

      {/* Modal Section */}
    </Flex>
  );
};

export default ExamAdd;
