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
import FormNotes from '../FormNotes';
import { useState } from 'react';
import useAddApprovalStase from '../../hooks/useAddApprovalStase';
import useGetStaseApprovalList from '../../hooks/useGetStaseApprovalList';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  staseId: string;
  status: 'APPROVED' | 'REJECTED';
  residenName: string;
}

const ModalApprove = ({
  closeModal,
  isOpen,
  staseId,
  status,
  residenName,
}: Props) => {
  const toast = useToast();
  const [notes, setNotes] = useState('');
  const { mutate } = useGetStaseApprovalList();
  const { createApprovalStase } = useAddApprovalStase();

  const handleApprove = async () => {
    const response = await createApprovalStase({
      notes: notes,
      productId: staseId,
      status: status === 'APPROVED' ? 'PASSED' : 'FAILED',
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: `Berhasil ${
          status === 'APPROVED' ? 'Approve' : 'Reject'
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
        title: `Failed ${status === 'APPROVED' ? 'Approve' : 'Reject'} Stase`,
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
          <Text as="b">
            Anda akan {status === 'APPROVED' ? 'menyetujui' : 'menolak'}
          </Text>
          <Text as="b" mb={4}>
            {residenName}
          </Text>

          <FormNotes setNotes={setNotes} />

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

export default ModalApprove;
