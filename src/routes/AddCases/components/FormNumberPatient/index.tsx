import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';

const FormNumberPatient = () => {
  const casesDispatch = useAddCasesDispatch();
  const [numberPatient, setNumberPatient] = useState(0);
  const handleChangePatient = (event: ChangeEvent<HTMLInputElement>) =>
    setNumberPatient(Number(event.target.value));

  useEffect(() => {
    casesDispatch({
      type: 'set_number_patient',
      data: {
        numberPatient: numberPatient,
      },
    });
  }, [casesDispatch, numberPatient]);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Jumlah Pasien
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input
        placeholder="Masukkan Jumlah Pasien"
        onChange={handleChangePatient}
        type="number"
      />
    </Flex>
  );
};

export default FormNumberPatient;
