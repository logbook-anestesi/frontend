import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalApprove = ({ closeModal, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b">Anda akan menyetujui</Text>
          <Text as="b" mb={4}>
            C-OK04-1
          </Text>

          <Text fontSize="sm" px={4} as="b" mb={4}>
            Apakah Anda ingin menambahkan case ini ke dashboard Anda?
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button colorScheme="teal" backgroundColor={colors.primaryPurple}>
              Ya
            </Button>
            <Button
              backgroundColor={colors.white}
              borderWidth={2}
              borderColor={colors.primaryPurple}
              onClick={closeModal}
            >
              Tidak
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalApprove;
