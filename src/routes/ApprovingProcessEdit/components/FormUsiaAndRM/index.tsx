import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialUsia?: number;
  initialNoRm?: string;
}

const FormUsiaAndRM = ({ initialNoRm, initialUsia }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();

  const [age, setAge] = useState('');
  const [recordNumber, setRecordNumber] = useState('');
  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) =>
    setAge(event.target.value);
  const handleChangeRm = (event: ChangeEvent<HTMLInputElement>) =>
    setRecordNumber(event.target.value);

  useEffect(() => {
    setAge(initialUsia?.toString() || '0');
  }, [initialUsia]);

  useEffect(() => {
    setRecordNumber(initialNoRm || '');
  }, [initialNoRm]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_patient_age',
      data: {
        age: Number(age),
      },
    });

    approveEditDispatch({
      type: 'set_patient_rm',
      data: {
        rm: recordNumber,
      },
    });
  }, [age, approveEditDispatch, recordNumber]);

  if (!(initialNoRm && initialUsia)) {
    return <></>;
  }

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      {initialUsia !== null && (
        <Flex direction="column" flex={1}>
          <Text fontSize="sm" color={colors.darkGrey}>
            Usia Pasien
          </Text>

          <Input
            placeholder="0"
            onChange={handleChangeAge}
            value={age}
            type="text"
            inputMode="numeric"
          />
        </Flex>
      )}

      {initialNoRm !== null && (
        <Flex direction="column" flex={1}>
          <Text fontSize="sm" color={colors.darkGrey}>
            No RM
          </Text>

          <Input
            placeholder="XYZ123"
            onChange={handleChangeRm}
            value={recordNumber}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default FormUsiaAndRM;
