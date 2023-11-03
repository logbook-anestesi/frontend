import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const FormTitle = ({ setTitle }: Props) => {
  const handleChangePelanggaran = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Judul Peanggaran*
      </Text>

      <Input
        placeholder="Masukkan catatan"
        onChange={handleChangePelanggaran}
      />
    </Flex>
  );
};

export default FormTitle;
