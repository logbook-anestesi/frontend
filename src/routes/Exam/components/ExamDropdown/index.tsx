import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { ExamMenu } from '../../types';

interface Props {
  onClick: () => void;
  selectedExam: ExamMenu;
}

const ExamDropdown = ({ onClick, selectedExam }: Props) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius={10}
      padding="6px 10px 6px 18px"
      justify="space-between"
      align="center"
      onClick={onClick}
      mb={2}
    >
      <Text>{selectedExam?.title}</Text>

      <ChevronDownIcon boxSize="35px" />
    </Flex>
  );
};

export default ExamDropdown;
