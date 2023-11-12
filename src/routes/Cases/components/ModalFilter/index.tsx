import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: () => Promise<void>;
}

const ModalFilter = ({ closeModal, isOpen, handleSubmit }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column">
          <Text as="b" align="center" textAlign="center">
            Filter Cases
          </Text>

          <Flex direction="column" gap={3} my={5} align="start" justify="start">
            <Text fontSize="sm" color={colors.darkGrey}>
              Tipe Tag
            </Text>

            <Select placeholder="Pilih tipe tag...">
              <option value="option1">ASA</option>
              <option value="option2"></option>
            </Select>
          </Flex>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={handleSubmit}
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

export default ModalFilter;
