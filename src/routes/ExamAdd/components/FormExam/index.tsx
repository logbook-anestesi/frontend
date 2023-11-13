import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { EXAM } from '../../constants';
import { ChangeEvent } from 'react';
import { convertUnderscoresToSpaces } from '../../../../helpers';

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
        Ujian Yang Diambil
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Select placeholder="Pilih Exam" onChange={handleChange}>
        {EXAM?.map((type) => (
          <option value={type.value} key={`type-${type.title}`}>
            {convertUnderscoresToSpaces(type.title)}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default FormExam;
