import { Flex, Text, Textarea } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}

const FormNotes = ({ setNotes }: Props) => {
  const handleChangeNotes = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNotes(event.target.value);

  return (
    <Flex
      direction="column"
      justify="start"
      align="start"
      mb={6}
      w="full"
      px={3}
    >
      <Text fontSize="sm" color={colors.darkGrey}>
        Catatan
      </Text>

      <Textarea placeholder="Masukkan catatan" onChange={handleChangeNotes} />
    </Flex>
  );
};

export default FormNotes;
