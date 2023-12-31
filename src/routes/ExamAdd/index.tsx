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
import FormDate from './components/FormDate';

const ExamAdd = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [penguji, setPenguji] = useState<DPJP>();
  const [createdDate, setCreatedDate] = useState('');

  const { createExam, loading } = useAddExam();

  const handleClickSubmit = async () => {
    const response = await createExam({
      created: createdDate,
      examinerId: penguji?.id || '',
      type: exam,
      ...(examType !== '' ? { isTheory: examType === 'TEORI' } : {}),
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Ujian berhasil dibuat',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      onClose();
      navigate(-1);
    }

    if (!response?.success) {
      toast({
        title: 'Gagal membuat Ujian',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 7000,
        isClosable: true,
      });

      onClose();
    }
  };

  const handleSubmit = () => {
    if (exam === '' || examType === '' || !penguji) {
      toast({
        title: 'Harap isi semua field',
        status: 'error',
        position: 'top',
        duration: 2000,
      });
    } else {
      onOpen();
    }
  };

  return (
    <Flex direction="column">
      <Header title="Buat Ujian" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setCreatedDate} />
        <FormExam setExam={setExam} />
        <FormRadioExamType setExamType={setExamType} />
        <FormPenguji setPenguji={setPenguji} />

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
