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
import { Dispatch, SetStateAction } from "react";
import { DPJP } from "../FormDPJP";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setDPJP: Dispatch<SetStateAction<DPJP | undefined>>;
}

const ModalDPJP = ({ isOpen, closeModal, setDPJP }: Props) => {
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
          return (
            <CardName
              dpjp={dpjp}
              key={dpjp.id}
              setDPJP={setDPJP}
              closeModal={closeModal}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalDPJP;
