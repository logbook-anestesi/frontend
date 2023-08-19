import { Button, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetPendingReview from "./hooks/useGetPendingReview";
import { colors } from "../../constants/colors";
import CardApproval from "./components/CardApproval";
import LoaderCircle from "../../components/LoaderCircle";

const CasesReviewDashboardPage = () => {
  const { reviewData, loading } = useGetPendingReview();

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Pending Cases Review" />

      <Flex padding="30px" direction="column" gap="16px">
        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
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
