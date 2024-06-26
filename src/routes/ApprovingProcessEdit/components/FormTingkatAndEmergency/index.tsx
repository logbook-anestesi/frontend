import { Box, Flex, Input, Text } from '@chakra-ui/react';
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

  const [tier, setTier] = useState('');
  const handleChangeTingkat = (event: ChangeEvent<HTMLInputElement>) =>
    setTier(event.target.value);

  useEffect(() => {
    setTier(initialValue?.toString() || '0');
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_tier',
      data: {
        tier: Number(tier),
      },
    });
  }, [approveEditDispatch, tier]);

  if (!initialValue) {
    return <></>;
  }

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      {initialValue !== null && (
        <Flex direction="column" flex={1}>
          <Text fontSize="sm" color={colors.darkGrey}>
            Tingkat
            <Box as="span" color={colors.primaryRed}>
              *
            </Box>
          </Text>

          <Input
            placeholder="1"
            onChange={handleChangeTingkat}
            value={tier}
            type="number"
          />
        </Flex>
      )}

      {emergencyInitialValue !== null && (
        <Flex direction="column" flex={1} justify="center" align="center">
          <FormRadioEmergency initialValue={emergencyInitialValue} />
        </Flex>
      )}
    </Flex>
  );
};

export default FormTingkatAndEmergency;
