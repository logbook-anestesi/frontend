import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import FormDate from '../ExamAdd/components/FormDate';
import FormAsesor from '../ExamAddDOPS/components/FormAsesor';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';
import FormPenilaianDiri from '../ExamAddDOPS/components/FormPenilaianDiri';
import FormProcess from '../ExamAddDOPS/components/FormProcess';
import FormReason from '../ExamAddDOPS/components/FormReason';
import FormReflection from '../ExamAddDOPS/components/FormReflection';
import { colors } from '../../constants/colors';
import useAddExamPreparation from '../ExamAdd/hooks/useAddExamPreparation';
import { useNavigate } from 'react-router-dom';

const ExamAddAlman = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  const [penilaian, setPenilaian] = useState('');
  const [isGood, setIsGood] = useState('');
  const [reason, setReason] = useState('');
  const [reflection, setReflection] = useState('');

  const toast = useToast();
  const navigate = useNavigate();
  const { createExamPreparation, loading } = useAddExamPreparation();

  const isFormValid =
    isGood !== '' && reason !== '' && reflection !== '' && asesor !== undefined;

  const handleSubmit = async () => {
    if (!isFormValid) {
      toast({
        title: 'Gagal membuat Ujian',
        description: 'Harap Lengkapi Semua Data',
        status: 'error',
        position: 'top',
        duration: 7000,
        isClosable: true,
      });

      return;
    }

    const response = await createExamPreparation({
      type: 'ALMAN',
      preparationDate: date,
      assessorUserId: asesor?.id || '',
      selfEvaluation: penilaian,
      isGoingWell: isGood === 'Ya',
      reason: reason,
      selfReflection: reflection,
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
    }
  };

  return (
    <Flex direction="column">
      <Header title="Tambah ALMAN" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} />
        <FormAsesor setAsesor={setAsesor} />
        <FormPenilaianDiri setPenilaian={setPenilaian} />
        <FormProcess setProcessValue={setIsGood} />
        <FormReason setReason={setReason} />
        <FormReflection setReflection={setReflection} />

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

export default ExamAddAlman;
