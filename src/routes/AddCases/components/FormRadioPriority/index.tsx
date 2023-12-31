import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';
import { RADIO_PRIORITY } from '../../constants';

const FormRadioPriority = () => {
  const casesDispatch = useAddCasesDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    casesDispatch({
      type: 'set_priority',
      data: {
        priority: value,
      },
    });
  }, [casesDispatch, value]);

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
