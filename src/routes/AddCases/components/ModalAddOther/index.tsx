import {
  Box,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOther = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan tipe operasi lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input placeholder="Masukkan tipe operasi ..." />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOther;
