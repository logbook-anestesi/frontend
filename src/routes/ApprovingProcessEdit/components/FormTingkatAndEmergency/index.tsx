import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import FormRadioEmergency from '../FormRadioEmergency';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: number;
  emergencyInitialValue?: boolean;
}

const FormTingkatAndEmergency = ({
  initialValue,
  emergencyInitialValue,
}: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();

  const [tier, setTier] = useState(0);
  const handleChangeTingkat = (event: ChangeEvent<HTMLInputElement>) =>
    setTier(Number(event.target.value));

  useEffect(() => {
    setTier(initialValue || 0);
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_tier',
      data: {
        tier: tier,
      },
    });
  }, [approveEditDispatch, tier]);

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      <Flex direction="column" flex={1}>
        <Text fontSize="sm" color={colors.darkGrey}>
          Tingkat
        </Text>

        <Input placeholder="1" onChange={handleChangeTingkat} value={tier} />
      </Flex>

      <Flex direction="column" flex={1} justify="center" align="center">
        <FormRadioEmergency initialValue={emergencyInitialValue} />
      </Flex>
    </Flex>
  );
};

export default FormTingkatAndEmergency;
