import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormExam from './components/FormExam';
import { useState } from 'react';
import FormRadioExamType from './components/FormRadioExamType';
import FormPenguji from './components/FormPenguji';
import { colors } from '../../constants/colors';
import ModalSubmit from './components/ModalSubmit';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';

const ExamAdd = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [penguji, setPenguji] = useState<DPJP>();

  console.log('999 hasil perubahan', { exam, examType, penguji });

  return (
    <Flex direction="column">
      <Header title="Buat Exam" />

      <Flex padding="30px" direction="column" gap="16px">
        <FormExam setExam={setExam} />
        <FormRadioExamType setExamType={setExamType} />
        <FormPenguji setPenguji={setPenguji} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={onOpen}
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>

      {/* Modal Section */}
      <ModalSubmit
        closeModal={onClose}
        isOpen={isOpen}
        exam={exam}
        examType={examType}
        penguji={penguji}
      />
    </Flex>
  );
};

export default ExamAdd;
