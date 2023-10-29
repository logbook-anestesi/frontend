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
  selectedStase?: string;
  closeModal: () => void;
  onSubmit: () => void;
}

const ModalSuccess = ({
  selectedStase,
  closeModal,
  isOpen,
  onSubmit,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" gap={5} textAlign="center">
          <Text px={2} as="b">
            Stase {selectedStase} telah berhasil diambil pada bulan ini
          </Text>
          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={onSubmit}
            >
              Ya
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
