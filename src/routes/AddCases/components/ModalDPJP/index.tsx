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
import CardName from "./CardName";
import { DUMMY_DPJP } from "./dummyDPJP";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalDPJP = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Search DPJP..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {DUMMY_DPJP?.map((dpjp) => {
          return <CardName name={dpjp.name} key={dpjp.id} />;
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalDPJP;
