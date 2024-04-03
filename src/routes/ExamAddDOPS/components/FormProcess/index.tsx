import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { PROCESS_EXAM } from '../../constants';

interface Props {
  setProcessValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormProcess = ({ setProcessValue }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setProcessValue(value);
  }, [value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Berlangsung dengan baik
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
          {PROCESS_EXAM.map((option) => (
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

export default FormProcess;
