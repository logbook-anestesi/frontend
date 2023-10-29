import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';
import FormRadioEmergency from '../FormRadioEmergency';

interface Props {
  isMondatory?: boolean;
}

const FormTingkatAndEmergency = ({ isMondatory }: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const [tier, setTier] = useState(0);
  const handleChangeTingkat = (event: ChangeEvent<HTMLInputElement>) =>
    setTier(Number(event.target.value));

  useEffect(() => {
    casesDispatch({
      type: 'set_tier',
      data: {
        tier: tier,
      },
    });
  }, [casesDispatch, tier]);

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      <Flex direction="column" flex={1}>
        <Text fontSize="sm" color={colors.darkGrey}>
          Tingkat
          {isMondatory && <Box as="span">*</Box>}
        </Text>

        <Input placeholder="1" onChange={handleChangeTingkat} />
      </Flex>

      <Flex direction="column" flex={1} justify="center" align="center">
        <FormRadioEmergency />
      </Flex>
    </Flex>
  );
};

export default FormTingkatAndEmergency;
