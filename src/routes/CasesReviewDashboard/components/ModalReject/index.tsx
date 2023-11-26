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
import useAddApproval from '../../../ApprovingProcess/hooks/useAddApproval';
import useGetPendingReview from '../../hooks/useGetPendingReview';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  caseId: string;
  caseType: string;
}

const ModalReject = ({ closeModal, isOpen, caseId, caseType }: Props) => {
  const { mutate } = useGetPendingReview();
  const toast = useToast();
  const { createApproval } = useAddApproval();

  const handleSubmitForm = async () => {
    const response = await createApproval({
      caseId: caseId,
      status: 'REJECTED',
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Berhasil Reject Case',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      closeModal();
      mutate();
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Reject Case',
        description: response?.message[0],
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b">Anda akan menolak</Text>
          <Text as="b" mb={4}>
            {caseType} - {caseId?.substring(0, 4)}
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={handleSubmitForm}
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

export default ModalReject;
