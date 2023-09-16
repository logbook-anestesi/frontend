import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import TableData from './components/TableData';
import { EXAM } from './constants';

const ExamList = () => {
  return (
    <Flex direction="column">
      <Header title="Daftar Exam" />

      <Flex padding="30px" direction="column" gap="16px">
        <TableData examList={EXAM || []} />
      </Flex>
    </Flex>
  );
};

export default ExamList;
