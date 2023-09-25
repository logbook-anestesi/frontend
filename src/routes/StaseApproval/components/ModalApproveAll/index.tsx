import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import useGetStaseApprovalList from '../../hooks/useGetStaseApprovalList';
import useAddApprovalStaseBulk from '../../hooks/useAddApprovalStaseBulk';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  typeBulk: 'PASSED' | 'FAILED';
}

const ModalApproveAll = ({ closeModal, isOpen, typeBulk }: Props) => {
  const toast = useToast();
  const { mutate } = useGetStaseApprovalList();
  const { createApprovalStaseBulk } = useAddApprovalStaseBulk();

  const handleApprove = async () => {
    const response = await createApprovalStaseBulk({
      status: typeBulk,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: `Berhasil ${
          typeBulk === 'PASSED' ? 'Approve' : 'Reject'
        } Stase`,
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      mutate();
      closeModal();
      return;
    }

    if (!response?.success) {
      toast({
        title: `Failed  ${typeBulk === 'PASSED' ? 'Approve' : 'Reject'} Stase`,
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });

      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b" mb={6}>
            Anda akan {typeBulk === 'PASSED' ? 'Menyetujui' : ' Menolak'} semua
            residen?
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={handleApprove}
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

export default ModalApproveAll;
