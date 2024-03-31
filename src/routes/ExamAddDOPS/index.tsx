import { Button, Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import FormDate from '../ExamAdd/components/FormDate';
import { colors } from '../../constants/colors';
import FormAsesor from './components/FormAsesor';
import { DPJP } from '../AddCases/hooks/useGetDPJP/types';

const ExamAddDOPS = () => {
  const [date, setDate] = useState('');
  const [asesor, setAsesor] = useState<DPJP>();
  // const [prosedur, setProsedur] = useState();
  // const [penilaian, setPenilaian] = useState();
  // const [isGood, setIsGood] = useState();
  // const [reason, setReason] = useState();
  // const [reflection, setReflection] = useState();

  const handleSubmit = () => {
    console.log({ date, asesor });
  };

  return (
    <Flex direction="column">
      <Header title="Tambah DOPS" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} />
        <FormAsesor setAsesor={setAsesor} />

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
