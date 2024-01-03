import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { RADIO_PENILAIAN_GROUP } from '../../constants';
import { useEffect, useState } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

const RadioPenilaian = () => {
  const [value, setValue] = useState('');
  const approvingProcessDispatch = useApprovalEditDispatch();

  useEffect(() => {
    approvingProcessDispatch({
      type: 'set_rate',
      data: {
        rate: value,
      },
    });
  }, [approvingProcessDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Penilaian
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
          {RADIO_PENILAIAN_GROUP.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              <Text fontSize="xs">{option.title}</Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
export default RadioPenilaian;
