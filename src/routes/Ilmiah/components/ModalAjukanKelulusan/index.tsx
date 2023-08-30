import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useState } from "react";
import FormLink from "../FormLink";
import Information from "../Information";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export interface PembimbingData {
  name: string;
  id: string;
}

const ModalAjukanKelulusan = ({ closeModal, isOpen }: Props) => {
  const [linkDocument, setLinkDocument] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Ajukan Kelulusan ...</ModalHeader>
        <ModalCloseButton />

        <Text mb={2}>Pembimbing</Text>

        <Flex direction="column" gap={5} mb={5}>
          <Flex direction="column" gap={1}>
            <Text as="b">Dr Ari Angga Nugraha</Text>
            <Text as="b">Dr Hartono</Text>
          </Flex>

          <FormLink setLink={setLinkDocument} />

          <Information />
        </Flex>

        <Flex w="full" direction="column" gap={4}>
          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
          >
            Submit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalAjukanKelulusan;
