import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import TableTitle from './components/TableTitle';

const ExamPage = () => {
  return (
    <Flex direction="column">
      <Header title="Exam" />

      <Flex padding="30px" direction="column" gap="16px">
        <ButtonAdd />

        <TableTitle />
      </Flex>

      {/* Modal Section */}
    </Flex>
  );
};

export default ExamPage;
