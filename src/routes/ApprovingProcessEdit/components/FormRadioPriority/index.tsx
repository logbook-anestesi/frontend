import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { RADIO_PRIORITY } from '../../constants';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: string;
}

const FormRadioPriority = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_priority',
      data: {
        priority: value,
      },
    });
  }, [approveEditDispatch, value]);

  if (initialValue === null) {
    return null;
  }

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Prioritas
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
        <Stack direction="row" gap={3}>
          {RADIO_PRIORITY.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioPriority;
