import { Button, Flex } from '@chakra-ui/react';
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

const ExamAddDOPS = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  const [prosedur, setProsedur] = useState('');
  const [penilaian, setPenilaian] = useState('');
  const [isGood, setIsGood] = useState('');
  const [reason, setReason] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = () => {
    console.log({
      date,
      asesor,
      prosedur,
      penilaian,
      isGood,
      reason,
      reflection,
    });
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
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ExamAddDOPS;
