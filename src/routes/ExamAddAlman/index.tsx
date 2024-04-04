import { Button, Flex } from '@chakra-ui/react';
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

const ExamAddAlman = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  const [penilaian, setPenilaian] = useState('');
  const [isGood, setIsGood] = useState('');
  const [reason, setReason] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = () => {
    console.log({ date, asesor, penilaian, isGood, reason, reflection });
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
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ExamAddAlman;
