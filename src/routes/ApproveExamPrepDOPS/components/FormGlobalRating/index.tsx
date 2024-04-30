import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { GLOBAL_RATING } from '../../constants';

interface Props {
  setGlobalRating: React.Dispatch<React.SetStateAction<string>>;
}

const FormGlobalRating = ({ setGlobalRating }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setGlobalRating(value);
  }, [value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Global Rating
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
          {GLOBAL_RATING.map((option) => (
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

export default FormGlobalRating;
