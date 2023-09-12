import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setTitle: (title: string) => void;
}

const FormJudul = ({ setTitle }: Props) => {
  const handleChangeJudul = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Judul
      </Text>

      <Input
        placeholder="Masukkan judul tugas..."
        onChange={handleChangeJudul}
      />
    </Flex>
  );
};

export default FormJudul;
