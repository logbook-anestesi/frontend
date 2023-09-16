import { Flex, Select, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { EXAM } from '../../constants';
import { ChangeEvent } from 'react';

interface Props {
  setExam: (type: string) => void;
}

const FormExam = ({ setExam }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setExam(event.target.value);
  };

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Exam yang akan diambil*
      </Text>

      <Select placeholder="Pilih Exam" onChange={handleChange}>
        {EXAM?.map((type) => (
          <option value={type.value} key={`type-${type.title}`}>
            {type.title}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default FormExam;
