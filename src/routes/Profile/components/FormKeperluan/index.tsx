import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const FormKeperluan = ({ setDescription }: Props) => {
  const handleChangekeperluan = (event: ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Keperluan
      </Text>

      <Input
        placeholder="Masukkan keperluan"
        onChange={handleChangekeperluan}
      />
    </Flex>
  );
};

export default FormKeperluan;
