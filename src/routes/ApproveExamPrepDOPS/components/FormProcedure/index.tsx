import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setProcedure: React.Dispatch<React.SetStateAction<string>>;
  initialValue: string;
}

const FormProcedure = ({ setProcedure, initialValue }: Props) => {
  const handleChangeNotes = (event: ChangeEvent<HTMLInputElement>) =>
    setProcedure(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Prosedur
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input
        placeholder="Masukkan prosedur"
        onChange={handleChangeNotes}
        defaultValue={initialValue}
      />
    </Flex>
  );
};

export default FormProcedure;
