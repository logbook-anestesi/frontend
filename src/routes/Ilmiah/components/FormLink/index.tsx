import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setLink: (title: string) => void;
}

const FormLink = ({ setLink }: Props) => {
  const handleChangeJudul = (event: ChangeEvent<HTMLInputElement>) =>
    setLink(event.target.value);

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Link Dokumen*
      </Text>

      <Input
        placeholder="Masukkan link dokumen..."
        onChange={handleChangeJudul}
      />
    </Flex>
  );
};

export default FormLink;
