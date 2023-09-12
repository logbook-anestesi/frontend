import { Flex, Text, Textarea } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApprovingProcessDispatch } from '../../contexts';

const TextPenilaian = () => {
  const [value, setValue] = useState('');
  const approvingProcessDispatch = useApprovingProcessDispatch();
  const handleChangeNotes = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  useEffect(() => {
    approvingProcessDispatch({
      type: 'set_notes',
      data: {
        notes: value,
      },
    });
  }, [approvingProcessDispatch, value]);

  return (
    <Flex direction="column" gap={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Komentar
      </Text>

      <Textarea placeholder="XYZ123" onChange={handleChangeNotes} />
    </Flex>
  );
};

export default TextPenilaian;
