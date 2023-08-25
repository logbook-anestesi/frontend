import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import FormTipeIlmiah from "../FormTipeIlmiah";
import FormDosenPembimbing from "../FormDosenPembimbing";
import FormJudul from "../FormJudul";
import Information from "../Information";
import { colors } from "../../../../constants/colors";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddIlmiah = ({ closeModal, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Tambah Ilmiah</ModalHeader>
        <ModalCloseButton />

        <Flex w="full" direction="column" gap={4}>
          <FormTipeIlmiah />
          <FormDosenPembimbing />
          <FormJudul />
          <Information />

          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
            // onClick={handleSubmitForm}
            // isLoading={loading}
          >
            Submit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddIlmiah;
