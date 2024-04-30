import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { SUPERVISI } from '../../constants';

interface Props {
  setSupervisi: React.Dispatch<React.SetStateAction<string>>;
}

const FormSupervisi = ({ setSupervisi }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setSupervisi(value);
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
        <Flex direction="column" gap={3}>
          {SUPERVISI.map((option) => (
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
      </RadioGroup>
    </Flex>
  );
};

export default FormSupervisi;
