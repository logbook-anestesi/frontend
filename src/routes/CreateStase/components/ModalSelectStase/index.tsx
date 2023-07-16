import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import CardStase from "../CardStase";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onOpen: () => void;
}

const ModalSelectStase = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Search stase..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <CardStase lecturer="dr. Nana Mirdad" staseName="Ortho" />
        <CardStase lecturer="dr. Ari Angga Nugraha" staseName="Jantung" />
        <CardStase lecturer="dr. Erlangga" staseName="Saraf" />
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectStase;
