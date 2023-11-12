import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: () => void;
  residenName: string;
  violation: string;
}

const ModalConfirmSubmit = ({
  isOpen,
  closeModal,
  onSubmit,
  residenName,
  violation,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" gap={5} textAlign="center">
          <Text px={2} as="b">
            Anda akan membuat laporan pelanggaran
          </Text>

          <Flex
            py={1}
            px={4}
            backgroundColor="rgba(102, 45, 145, 0.1)"
            borderRadius={10}
            as="b"
            color={colors.lightPurple}
          >
            {residenName}
          </Flex>

          <Flex>{violation}</Flex>

          <Text color={colors.darkGrey} fontSize="sm" px={10}>
            Mohon pastikan Anda memasukkan data yang benar
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
              Batal
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmSubmit;
