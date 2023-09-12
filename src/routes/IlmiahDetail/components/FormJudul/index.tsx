import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setJudul: (title: string) => void;
}
const FormJudul = ({ setJudul }: Props) => {
  const handleChangeJudul = (event: ChangeEvent<HTMLInputElement>) =>
    setJudul(event.target.value);

  return (
    <Flex direction="column" gap={1} mb={3}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Judul
      </Text>

      <Input
        placeholder="Masukkan judul diskusi..."
        onChange={handleChangeJudul}
      />
    </Flex>
  );
};

export default FormJudul;
