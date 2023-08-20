import { Button, Flex, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetPendingReview from "./hooks/useGetPendingReview";
import { colors } from "../../constants/colors";
import CardApproval from "./components/CardApproval";
import LoaderCircle from "../../components/LoaderCircle";
import useApproveAll from "./hooks/useApproveAll";

const CasesReviewDashboardPage = () => {
  const toast = useToast();
  const { reviewData, loading } = useGetPendingReview();
  const { approveAll, loading: loadingApprovalAll } = useApproveAll();

  const handleApproveAll = async () => {
    const response = await approveAll("APPROVED");

    if (response?.success) {
      toast({
        title: "Success",
        description: "Berhasil Approve Case",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      window.location.reload();
      return;
    }

    if (!response?.success) {
      toast({
        title: "Failed Approve Case",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Pending Cases Review" />

      <Flex padding="30px" direction="column" gap="16px">
        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          isLoading={loadingApprovalAll}
          onClick={handleApproveAll}
        >
          Approve All
        </Button>

        {loading ? (
          <LoaderCircle />
        ) : (
          reviewData?.map((review) => (
            <CardApproval caseData={review} key={review.id} />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default CasesReviewDashboardPage;
