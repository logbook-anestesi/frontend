import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: string;
}

const FormNotes = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const [notes, setNotes] = useState('');
  const handleChangeNotes = (event: ChangeEvent<HTMLInputElement>) =>
    setNotes(event.target.value);

  useEffect(() => {
    setNotes(initialValue || '');
  }, [initialValue]);

  useEffect(() => {
    approveEditDispatch({
      type: 'set_note',
      data: {
        note: notes,
      },
    });
  }, [approveEditDispatch, notes]);

  if (notes === '') return null;

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Catatan
      </Text>

      <Input
        placeholder="Masukkan catatan"
        onChange={handleChangeNotes}
        value={notes}
      />
    </Flex>
  );
};

export default FormNotes;
