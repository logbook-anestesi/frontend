import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import {
  RADIO_LOCATION,
  RADIO_LOCATION_ICU,
  RADIO_LOCATION_PAIN,
  RADIO_LOCATION_RESUS,
} from '../../constants';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: string;
  type?: string;
}

const FormRadioLocation = ({ initialValue, type }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_location',
      data: {
        location: value,
      },
    });
  }, [approveEditDispatch, value]);

  if (initialValue === null || type === 'PROCEDURE_CONSULTATION') {
    return null;
  }

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Lokasi
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <RadioGroup
        onChange={setValue}
        value={value}
        overflowX="scroll"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Stack gap={3}>
          {type === 'ICU' &&
            RADIO_LOCATION_ICU.map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
              >
                {option.title}
              </Radio>
            ))}

          {type === 'OK' &&
            RADIO_LOCATION.map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
              >
                {option.title}
              </Radio>
            ))}

          {type === 'RESUS' &&
            RADIO_LOCATION_RESUS.map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
              >
                {option.title}
              </Radio>
            ))}

          {type === 'PAIN_SERVICE' &&
            RADIO_LOCATION_PAIN.map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
              >
                {option.title}
              </Radio>
            ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioLocation;
