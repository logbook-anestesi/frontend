import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormExam from './components/FormExam';
import { useState } from 'react';
import FormRadioExamType from './components/FormRadioExamType';
import FormPenguji from './components/FormPenguji';
import { colors } from '../../constants/colors';
import ModalSubmit from './components/ModalSubmit';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';
import useAddExam from './hooks/useAddExam';
import { useNavigate } from 'react-router-dom';

const ExamAdd = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [penguji, setPenguji] = useState<DPJP>();

  const { createExam, loading } = useAddExam();

  const handleClickSubmit = async () => {
    const response = await createExam({
      examinerId: penguji?.id || '',
      isTheory: examType === 'TEORI',
      type: exam,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Exam berhasil dibuat',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      onClose();
      navigate('/exam');
    }

    if (!response?.success) {
      toast({
        title: 'Failed membuat Exam',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 7000,
        isClosable: true,
      });

      onClose();
    }
  };

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
          isLoading={loading}
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
        handleSubmit={handleClickSubmit}
      />
    </Flex>
  );
};

export default ExamAdd;
