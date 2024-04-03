import { Flex, Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import FilterCases from './components/FilterCases';
import TableDataReviewedCase from './components/TableData';

const ReviewedCases = () => {
  return (
    <Flex flexDirection="column">
      <Header title="Reviewed Cases" />
      <Flex padding="10px 30px" direction="column" gap="16px">
        <FilterCases />
        <TableDataReviewedCase caseList={[]} />
      </Flex>
    </Flex>
  );
};

export default ReviewedCases;
