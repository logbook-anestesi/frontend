import { Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import useGetPendingReview from './hooks/useGetPendingReview';
import { colors } from '../../constants/colors';
import CardApproval from './components/CardApproval';
import LoaderCircle from '../../components/LoaderCircle';
import useApproveAll from './hooks/useApproveAll';
import ModalReject from './components/ModalReject';
import { useState } from 'react';

const CasesReviewDashboardPage = () => {
  const toast = useToast();
  const { reviewData, loading } = useGetPendingReview();
  const { approveAll, loading: loadingApprovalAll } = useApproveAll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caseId, setCaseId] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleApproveAll = async () => {
    const response = await approveAll('APPROVED');

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Berhasil Approve Case',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      window.location.reload();
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Approve Case',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleClickCard = (caseId: string, caseType: string) => {
    setCaseId(caseId);
    setCaseType(caseType);
    onOpen();
  };

  return (
    <Flex flexDirection="column">
      <Header title="Pending Cases Review" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        {(reviewData?.length || 0) > 0 && (
          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
            isLoading={loadingApprovalAll}
            onClick={handleApproveAll}
          >
            Approve All
          </Button>
        )}

        {reviewData?.length === 0 && (
          <Text align="center" mt={10}>
            Belum ada case untuk di review
          </Text>
        )}

        {loading ? (
          <LoaderCircle />
        ) : (
          reviewData?.map((review) => (
            <CardApproval
              caseData={review}
              key={review.id}
              onClick={handleClickCard}
            />
          ))
        )}
      </Flex>

      {/* Modal Section */}
      <ModalReject
        caseId={caseId}
        closeModal={onClose}
        isOpen={isOpen}
        caseType={caseType}
      />
    </Flex>
  );
};

export default CasesReviewDashboardPage;
