import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import FilterCases from './components/FilterCases';
import TableDataReviewedCase from './components/TableData';
import useGetReviewedCases from './hooks/useGetReviewedCases';

const ReviewedCases = () => {
  const { listReviewedCases, loading } = useGetReviewedCases();

  console.log({ listReviewedCases, loading });

  return (
    <Flex flexDirection="column">
      <Header title="Reviewed Cases" />
      <Flex padding="10px 30px" direction="column" gap="16px">
        <FilterCases />
        <TableDataReviewedCase caseList={listReviewedCases || []} />
      </Flex>
    </Flex>
  );
};

export default ReviewedCases;
