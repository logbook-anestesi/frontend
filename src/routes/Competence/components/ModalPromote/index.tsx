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
  promoteTo: string;
  closeModal: () => void;
  onSubmit: () => void;
}

const ModalPromote = ({ isOpen, promoteTo, closeModal, onSubmit }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" gap={5} textAlign="center">
          <Text px={2} as="b">
            Anda akan mengajukan kenaikan level kompetensi
          </Text>

          <Flex
            py={1}
            px={4}
            backgroundColor="rgba(102, 45, 145, 0.1)"
            borderRadius={10}
            as="b"
          >
            {promoteTo}
          </Flex>

          <Text color={colors.darkGrey} fontSize="sm" px={10}>
            Mohon pastikan Anda telah memilih stase yang Benar
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={onSubmit}
            >
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

export default ModalPromote;
