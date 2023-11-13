import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import CasesDropdown from './components/CasesDrodown';
import ModalSelectCases from './components/ModalSelectCases';
import { useEffect, useState } from 'react';
import { CaseMenu } from './types';
import ButtonAddCase from './components/ButtonAddCase';
import CaseListSection from './components/CaseListSection';
import BottomNav from './components/BottomNav';
import useGetCases from './hooks/useGetCases';
import LoaderCircle from '../../components/LoaderCircle';

const DEFAULT_CASE_MENU = {
  title: 'Pilih Tipe Kasus',
  value: '-',
};

const Cases = () => {
  const { caseList, loading } = useGetCases();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedCase, setSelectedCase] = useState<CaseMenu>(DEFAULT_CASE_MENU);
  const [finalCaseList, setFinalCaseList] = useState(caseList);

  useEffect(() => {
    setFinalCaseList(caseList);
  }, [caseList]);

  const handleResetData = () => {
    setFinalCaseList(caseList);
  };

  return (
    <Flex flexDirection="column" height="100vh">
      <Header title="Kasus" />

      <Flex direction="column" justify="space-between" height="100%">
        <Flex padding="10px 30px" direction="column" gap="16px">
          <CasesDropdown onClick={onOpen} selectedCase={selectedCase} />
          <ModalSelectCases
            isOpen={isOpen}
            closeModal={onClose}
            setCase={setSelectedCase}
          />

          <ButtonAddCase caseName={selectedCase.title} />
          {loading || !caseList ? (
            <LoaderCircle />
          ) : (
            <CaseListSection
              caseList={finalCaseList}
              selectedCase={selectedCase}
              setFinalCaseList={setFinalCaseList}
              handleResetData={handleResetData}
            />
          )}
        </Flex>

        <BottomNav isProgressPage={false} />
      </Flex>
    </Flex>
  );
};

export default Cases;
