import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import FormDate from '../ExamAdd/components/FormDate';
import { colors } from '../../constants/colors';
import FormAsesor from './components/FormAsesor';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';
import FormProcedure from './components/FormProcedure';
import FormPenilaianDiri from './components/FormPenilaianDiri';
import FormProcess from './components/FormProcess';
import FormReason from './components/FormReason';
import FormReflection from './components/FormReflection';
import useAddExamPreparation from '../ExamAdd/hooks/useAddExamPreparation';
import { useNavigate } from 'react-router-dom';

const ExamAddDOPS = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  const [prosedur, setProsedur] = useState('');
  const [penilaian, setPenilaian] = useState('');
  const [isGood, setIsGood] = useState('');
  const [reason, setReason] = useState('');
  const [reflection, setReflection] = useState('');

  const toast = useToast();
  const navigate = useNavigate();
  const { createExamPreparation, loading } = useAddExamPreparation();

  const handleSubmit = async () => {
    const response = await createExamPreparation({
      type: 'DOPS',
      preparationDate: date,
      assessorUserId: asesor?.id || '',
      procedure: prosedur,
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
      <Header title="Tambah DOPS" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} />
        <FormAsesor setAsesor={setAsesor} />
        <FormProcedure setProcedure={setProsedur} />
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

export default ExamAddDOPS;
