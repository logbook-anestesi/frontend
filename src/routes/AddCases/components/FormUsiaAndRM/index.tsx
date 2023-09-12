import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';

const FormUsiaAndRM = () => {
  const casesDispatch = useAddCasesDispatch();

  const [age, setAge] = useState(0);
  const [recordNumber, setRecordNumber] = useState('');
  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) =>
    setAge(Number(event.target.value));
  const handleChangeRm = (event: ChangeEvent<HTMLInputElement>) =>
    setRecordNumber(event.target.value);

  useEffect(() => {
    casesDispatch({
      type: 'set_patient_age',
      data: {
        age: age,
      },
    });

    casesDispatch({
      type: 'set_patient_rm',
      data: {
        rm: recordNumber,
      },
    });
  }, [age, casesDispatch, recordNumber]);

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      <Flex direction="column" flex={1}>
        <Text fontSize="sm" color={colors.darkGrey}>
          Usia Pasien
        </Text>

        <Input placeholder="0" onChange={handleChangeAge} />
      </Flex>

      <Flex direction="column" flex={1}>
        <Text fontSize="sm" color={colors.darkGrey}>
          No RM
        </Text>

        <Input placeholder="XYZ123" onChange={handleChangeRm} />
      </Flex>
    </Flex>
  );
};

export default FormUsiaAndRM;
