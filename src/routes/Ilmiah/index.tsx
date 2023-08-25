import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import ButtonAdd from "./components/ButtonAdd";
import ModalAddIlmiah from "./components/ModalAddIlmiah";
import { useState } from "react";
import useCreateIlmiah from "./hooks/useCreateIlmiah";

const IlmiahPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title="Ilmiah" />

      <Flex padding="30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={onOpen} />
      </Flex>

      {/* Modal Section */}
      <ModalAddIlmiah closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default IlmiahPage;
