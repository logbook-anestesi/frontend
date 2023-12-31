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
import useAddApproval from '../../hooks/useAddApprovals';
import useAddApprovalExam from '../../hooks/useAddApprovalsExam';
import useGetAllExamApprovals from '../../hooks/useGetAllExamApprovals';
import useGetScientificApprovals from '../../hooks/useGetAllApprovals';
import useAddApprovalGraduation from '../../hooks/useAddApprovalGraduation';
import useAddApprovalDiscussionHistory from '../../hooks/useAddApprovalDiscussionHistory';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  itemId: string;
  statusApprove: string;
  typeItem: string;
  residenName: string;
}

const ModalApprove = ({
  closeModal,
  isOpen,
  itemId,
  statusApprove,
  typeItem,
  residenName,
}: Props) => {
  const toast = useToast();
  const { createApproval, loading } = useAddApproval();
  const { createApprovalExam, loading: loadingExam } = useAddApprovalExam();
  const { createApprovalGraduation, loading: loadingGraduation } =
    useAddApprovalGraduation();
  const { createApprovalDiscussionHistory, loading: loadingDiscussion } =
    useAddApprovalDiscussionHistory();
  const { mutate: mutateExam } = useGetAllExamApprovals();
  const { mutate: mutateScientific } = useGetScientificApprovals();

  const handleApproval = async (type: string) => {
    if (typeItem === 'ilmiah') {
      const response = await createApproval({
        productId: itemId,
        status: type,
      });

      if (response?.success) {
        toast({
          title: 'Success',
          description: `Success ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Ilmiah`,
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });

        mutateScientific();
        closeModal();
        return;
      }

      if (!response?.success) {
        toast({
          title: `Failed ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Ilmiah`,
          description: response?.message,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });

        closeModal();
      }

      return;
    }

    if (typeItem === 'exam') {
      const response = await createApprovalExam({
        productId: itemId,
        status: type,
      });

      if (response?.success) {
        toast({
          title: 'Success',
          description: `Success ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Exam`,
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });

        mutateExam();
        closeModal();
        return;
      }

      if (!response?.success) {
        toast({
          title: `Failed ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Exam`,
          description: response?.message,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });

        closeModal();
      }

      return;
    }

    if (typeItem === 'graduation') {
      const response = await createApprovalGraduation({
        productId: itemId,
        status: type,
      });

      if (response?.success) {
        toast({
          title: 'Success',
          description: `Success ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Graduation`,
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });

        mutateExam();
        closeModal();
        return;
      }

      if (!response?.success) {
        toast({
          title: `Failed ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Graduation`,
          description: response?.message,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });

        closeModal();
      }

      return;
    }

    if (typeItem === 'discussion') {
      const response = await createApprovalDiscussionHistory({
        productId: itemId,
        status: type,
      });

      if (response?.success) {
        toast({
          title: 'Success',
          description: `Success ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Diskusi`,
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });

        mutateExam();
        closeModal();
        return;
      }

      if (!response?.success) {
        toast({
          title: `Failed ${
            statusApprove === 'APPROVED' ? 'Approve' : 'Reject'
          } Diskusi`,
          description: response?.message,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });

        closeModal();
      }

      return;
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b">
            Anda akan {statusApprove === 'APPROVED' ? 'menyetujui' : 'menolak'}
          </Text>
          <Text as="b" mb={4}>
            {residenName || '-'}
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={() => handleApproval(statusApprove)}
              isLoading={
                loading || loadingExam || loadingGraduation || loadingDiscussion
              }
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

export default ModalApprove;
