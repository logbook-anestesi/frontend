import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { RADIO_AGE_GROUP } from '../../constants';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: string;
}

const FormRadioAgeGroup = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_age_group',
      data: {
        ageGroup: value,
      },
    });
  }, [approveEditDispatch, value]);

  if (initialValue === null) {
    return null;
  }

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Kelompok Umur
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
          {RADIO_AGE_GROUP.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioAgeGroup;
