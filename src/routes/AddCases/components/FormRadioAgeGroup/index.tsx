import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { RADIO_AGE_GROUP } from '../../constants';
import { useAddCasesDispatch } from '../../contexts';

interface Props {
  isMondatory?: boolean;
}

const FormRadioAgeGroup = ({ isMondatory }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    casesDispatch({
      type: 'set_age_group',
      data: {
        ageGroup: value,
      },
    });
  }, [casesDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey} mb={3}>
        Kelompok Umur
        {isMondatory && (
          <Box as="span" color={colors.primaryRed}>
            *
          </Box>
        )}
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
