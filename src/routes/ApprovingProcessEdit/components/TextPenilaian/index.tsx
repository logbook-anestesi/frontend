import { Flex, Text, Textarea } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

const TextPenilaian = () => {
  const [value, setValue] = useState('');
  const approvingProcessDispatch = useApprovalEditDispatch();
  const handleChangeNotes = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  useEffect(() => {
    approvingProcessDispatch({
      type: 'set_rate_notes',
      data: {
        rateNotes: value,
      },
    });
  }, [approvingProcessDispatch, value]);

  return (
    <Flex direction="column" gap={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Komentar
      </Text>

      <Textarea onChange={handleChangeNotes} fontSize="sm" />
    </Flex>
  );
};

export default TextPenilaian;
