import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import FilterCases from './components/FilterCases';
import TableDataReviewedCase from './components/TableData';
import useGetReviewedCases from './hooks/useGetReviewedCases';
import { useEffect, useState } from 'react';
import { Case } from '../Cases/hooks/useGetCases/types';

const ReviewedCases = () => {
  const { listReviewedCases, loading } = useGetReviewedCases();
  const [reviewedCases, setReviewedCases] = useState<Case[] | undefined>([]);

  // Filter by jenis
  const handleChangeFilter = (filterInput: string) => {
    const newData = listReviewedCases?.filter((item) =>
      item.caseType
        .toLocaleLowerCase()
        .includes(filterInput.toLocaleLowerCase()),
    );

    setReviewedCases(newData);
  };

  useEffect(() => {
    setReviewedCases(listReviewedCases);
  }, [listReviewedCases]);

  return (
    <Flex flexDirection="column">
      <Header title="Reviewed Cases" />
      <Flex padding="10px 30px" direction="column" gap="16px">
        <FilterCases onChange={handleChangeFilter} />
        <TableDataReviewedCase
          caseList={reviewedCases || []}
          isLoading={loading}
        />
      </Flex>
    </Flex>
  );
};

export default ReviewedCases;
