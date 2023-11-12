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
  level: number;
}

const ModalPromote = ({ isOpen, closeModal, onSubmit, level }: Props) => {
  const getTextBasedOnLevel = () => {
    if (level == 1) {
      return 'Pembekalan -> Magang';
    } else if (level == 2) {
      return 'Magang -> Mandiri';
    }

    return '-';
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" gap={5} textAlign="center">
          <Text px={2} as="b">
            Anda akan mengajukan permohonan kenaikan level kompetensi
          </Text>

          <Flex
            py={1}
            px={4}
            backgroundColor="rgba(102, 45, 145, 0.1)"
            borderRadius={10}
            as="b"
          >
            {getTextBasedOnLevel()}
          </Flex>

          <Text color={colors.darkGrey} fontSize="sm" px={10}>
            Permohonan Anda akan diajukan kepada SPS dan KPS
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
