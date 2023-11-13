import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import useGetCaseProgress from './hooks/useGetCaseProgress';
import LoaderCircle from '../../components/LoaderCircle';
import TableData from './components/TableData';
import BottomNav from '../Cases/components/BottomNav';

const CaseProgress = () => {
  const { caseProgressList, loading } = useGetCaseProgress();

  return (
    <Flex flexDirection="column" height="100vh">
      <Header title="Pencapaian Kasus" />

      <Flex direction="column" justify="space-between" height="100%">
        <Flex padding="10px 30px" direction="column" gap="16px">
          {loading || !caseProgressList ? (
            <LoaderCircle />
          ) : (
            <TableData caseProgressList={caseProgressList} />
          )}
        </Flex>
      </Flex>
      <BottomNav isProgressPage={true} />
    </Flex>
  );
};

export default CaseProgress;
