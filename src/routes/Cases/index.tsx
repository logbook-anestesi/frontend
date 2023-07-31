import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import CasesDropdown from "./components/CasesDrodown";
import ModalSelectCases from "./components/ModalSelectCases";
import { useState } from "react";
import { Case } from "./types";
import { CASE_LIST } from "../../constants/caseList";
import ButtonAddCase from "./components/ButtonAddCase";
import CaseListSection from "./components/CaseListSection";
import BottomNav from "./components/BottomNav";
import useGetCases from "./hooks/useGetCases";
import LoaderCircle from "../../components/LoaderCircle";

const Cases = () => {
  const { caseList, loading } = useGetCases();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedCase, setSelectedCase] = useState<Case>(CASE_LIST[0]);

  return (
    <Flex flexDirection="column" height="100vh">
      <Header pathBack="/" title="Cases" />

      <Flex direction="column" justify="space-between" height="100%">
        <Flex padding="30px" direction="column" gap="16px">
          <CasesDropdown onClick={onOpen} selectedCase={selectedCase} />
          <ModalSelectCases
            isOpen={isOpen}
            closeModal={onClose}
            setCase={setSelectedCase}
          />

          <ButtonAddCase caseName={selectedCase.title} />
          {loading ? <LoaderCircle /> : <CaseListSection caseList={caseList} />}
        </Flex>

        <BottomNav />
      </Flex>
    </Flex>
  );
};

export default Cases;
