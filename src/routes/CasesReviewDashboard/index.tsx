import { Button, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetPendingReview from "./hooks/useGetPendingReview";
import { colors } from "../../constants/colors";
import CardApproval from "./components/CardApproval";

const CasesReviewDashboardPage = () => {
  const { reviewData } = useGetPendingReview();

  return (
    <Flex flexDirection="column">
      <Header title="Pending Cases Review" />

      <Flex padding="30px" direction="column" gap="16px">
        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
        >
          Approve All
        </Button>

        {reviewData?.map((review) => (
          <CardApproval caseData={review} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CasesReviewDashboardPage;
