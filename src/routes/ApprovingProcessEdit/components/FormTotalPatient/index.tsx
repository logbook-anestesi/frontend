import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialNumberOfPatient?: number;
}

const FormTotalPatient = ({ initialNumberOfPatient }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();

  const [totalPatient, setTotalPatient] = useState(0);
  const handleChangeNumberOfPatient = (event: ChangeEvent<HTMLInputElement>) =>
    setTotalPatient(Number(event.target.value));

  useEffect(() => {
    setTotalPatient(initialNumberOfPatient || 0);
  }, [initialNumberOfPatient]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_number_patient',
      data: {
        numberOfPatient: totalPatient,
      },
    });
  }, [totalPatient, approveEditDispatch]);

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      {initialNumberOfPatient !== null && (
        <Flex direction="column" flex={1}>
          <Text fontSize="sm" color={colors.darkGrey}>
            Jumlah Pasien
            <Box as="span" color={colors.primaryRed}>
              *
            </Box>
          </Text>

          <Input
            placeholder="0"
            onChange={handleChangeNumberOfPatient}
            value={totalPatient}
            type="number"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default FormTotalPatient;
