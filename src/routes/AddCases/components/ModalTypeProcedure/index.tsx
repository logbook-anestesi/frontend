import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import CardTypeProcedure from "./CardTypeProcedure";
import { Dispatch, SetStateAction, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  anesthesiaList: AnesthesiaType[];
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
}

const ModalTypeProcedure = ({
  isOpen,
  closeModal,
  anesthesiaList,
  setAnesthesia,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih tipe anestesi</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input placeholder="Cari tipe anestesi ..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {anesthesiaList?.map((anesthesia) => {
          return (
            <CardTypeProcedure
              key={anesthesia.id}
              anashtesia={anesthesia}
              closeModal={closeModal}
              setAnesthesia={setAnesthesia}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalTypeProcedure;
