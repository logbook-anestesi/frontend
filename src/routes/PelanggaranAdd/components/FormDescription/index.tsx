import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const FormDescription = ({ setDescription }: Props) => {
  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Deskripsi Pelanggaran*
      </Text>

      <Input
        placeholder="Masukkan catatan"
        onChange={handleChangeDescription}
      />
    </Flex>
  );
};

export default FormDescription;
