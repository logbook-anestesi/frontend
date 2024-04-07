import { Button, Flex, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormDate from '../ExamAdd/components/FormDate';
import { useState } from 'react';
import FormAsesor from '../ExamAddDOPS/components/FormAsesor';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';
import FormProcedure from '../ExamAddDOPS/components/FormProcedure';
import FormPenilaianDiri from '../ExamAddDOPS/components/FormPenilaianDiri';
import FormProcess from '../ExamAddDOPS/components/FormProcess';
import FormReason from '../ExamAddDOPS/components/FormReason';
import FormReflection from '../ExamAddDOPS/components/FormReflection';
import { colors } from '../../constants/colors';
import FormOperation from './components/FormOperation';
import useGetCasesForm from '../../hooks/useGetCasesForm';
import FormAdditionalTags from './components/FormAdditionalTags';
import useAddExamPreparation from '../ExamAdd/hooks/useAddExamPreparation';
import { useNavigate } from 'react-router-dom';

const ExamAddAcex = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  const [procedure, setProcedure] = useState('');
  const [penilaian, setPenilaian] = useState('');
  const [isGood, setIsGood] = useState('');
  const [reason, setReason] = useState('');
  const [reflection, setReflection] = useState('');

  const toast = useToast();
  const navigate = useNavigate();
  const { createExamPreparation, loading } = useAddExamPreparation();
  const { casesForm } = useGetCasesForm();

  const handleSubmit = async () => {
    const response = await createExamPreparation({
      type: 'ACEX',
      preparationDate: date,
      assessorUserId: asesor?.id || '',
      procedure: procedure,
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
      <Header title="Tambah ACEX" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} />
        <FormAsesor setAsesor={setAsesor} />
        <FormOperation formData={casesForm?.operationTypes} />
        <FormProcedure setProcedure={setProcedure} />
        <FormAdditionalTags />
        <FormPenilaianDiri setPenilaian={setPenilaian} />
        <FormProcess setProcessValue={setIsGood} />
        <FormReason setReason={setReason} />
        <FormReflection setReflection={setReflection} />

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

export default ExamAddAcex;
