import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setReflection: React.Dispatch<React.SetStateAction<string>>;
}

const FormReflection = ({ setReflection }: Props) => {
  const handleChangeReflection = (event: ChangeEvent<HTMLInputElement>) =>
    setReflection(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Refleksi Diri
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input
        placeholder="Masukkan refleksi diri"
        onChange={handleChangeReflection}
      />
    </Flex>
  );
};

export default FormReflection;
