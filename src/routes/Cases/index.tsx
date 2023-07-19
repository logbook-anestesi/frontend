import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import CasesDropdown from "./components/CasesDrodown";
import ModalSelectCases from "./components/ModalSelectCases";

const Cases = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Cases" />

      <Flex padding="30px" direction="column" gap="16px">
        <CasesDropdown onClick={onOpen} />
        <ModalSelectCases isOpen={isOpen} closeModal={onClose} />
      </Flex>
    </Flex>
  );
};

export default Cases;
