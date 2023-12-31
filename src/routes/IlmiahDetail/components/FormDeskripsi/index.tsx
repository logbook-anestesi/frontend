import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setDeskripsi: (deskripsi: string) => void;
}
const FormDeskripsi = ({ setDeskripsi }: Props) => {
  const handleChangeDeskripsi = (event: ChangeEvent<HTMLInputElement>) =>
    setDeskripsi(event.target.value);

  return (
    <Flex direction="column" gap={1} mb={4}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Deskripsi
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input
        placeholder="Masukkan hal yang didiskusikan..."
        onChange={handleChangeDeskripsi}
      />
    </Flex>
  );
};

export default FormDeskripsi;
