import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import CasesDropdown from "./components/CasesDrodown";
import ModalSelectCases from "./components/ModalSelectCases";
import { useState } from "react";
import { Case } from "./types";
import { CASE_LIST } from "../../constants/caseList";
import ButtonAddCase from "./components/ButtonAddCase";
import CaseListSection from "./components/CaseListSection";

const Cases = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedCase, setSelectedCase] = useState<Case>(CASE_LIST[0]);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Cases" />

      <Flex padding="30px" direction="column" gap="16px">
        <CasesDropdown onClick={onOpen} selectedCase={selectedCase} />
        <ModalSelectCases
          isOpen={isOpen}
          closeModal={onClose}
          setCase={setSelectedCase}
        />

        <ButtonAddCase caseName={selectedCase.title} />

        <CaseListSection />
      </Flex>
    </Flex>
  );
};

export default Cases;
