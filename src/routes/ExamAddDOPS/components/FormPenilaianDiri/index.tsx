import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { PENILAIAN_DIRI } from '../../constants';

interface Props {
  setPenilaian: React.Dispatch<React.SetStateAction<string>>;
}

const FormPenilaianDiri = ({ setPenilaian }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setPenilaian(value);
  }, [value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Penilaian Diri
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <RadioGroup
        onChange={setValue}
        value={value}
        overflowX="revert"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex direction="row" gap={5}>
          <Flex direction="column" gap={3}>
            {PENILAIAN_DIRI.slice(0, 2).map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
                minWidth="fit-content"
              >
                {option.title}
              </Radio>
            ))}
          </Flex>
          <Flex direction="column" gap={3}>
            {PENILAIAN_DIRI.slice(2, 4).map((option) => (
              <Radio
                value={option.value}
                colorScheme="purple"
                key={option.value}
                minWidth="fit-content"
              >
                {option.title}
              </Radio>
            ))}
          </Flex>
        </Flex>
      </RadioGroup>
    </Flex>
  );
};

export default FormPenilaianDiri;
