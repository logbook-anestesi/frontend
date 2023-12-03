import { Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';

const FormNotes = () => {
  const casesDispatch = useAddCasesDispatch();
  const [notes, setNotes] = useState('');
  const handleChangeNotes = (event: ChangeEvent<HTMLInputElement>) =>
    setNotes(event.target.value);

  useEffect(() => {
    casesDispatch({
      type: 'set_note',
      data: {
        note: notes,
      },
    });
  }, [casesDispatch, notes]);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Catatan
      </Text>

      <Input placeholder="Masukkan catatan" onChange={handleChangeNotes} />
    </Flex>
  );
};

export default FormNotes;
