import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalSuccessRequest = ({ isOpen, closeModal }: Props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    closeModal();
    navigate(-1);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" gap={5} textAlign="center">
          <Text px={2} as="b">
            Permohonan Anda telah dikirim ke SPS dan KPD
          </Text>

          <Text color={colors.darkGrey} fontSize="sm" px={10}>
            Anda akan mendapatkan notifikasi setelah permohonan disetujui oleh
            SPS dan KPS
          </Text>

          <Flex direction="column" width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={handleClose}
            >
              Ok
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccessRequest;
