import { Button, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetPendingReview from "./hooks/useGetPendingReview";
import { colors } from "../../constants/colors";
import CardApproval from "./components/CardApproval";

const CasesReviewDashboardPage = () => {
  const { reviewData } = useGetPendingReview();

  console.log("999 REVIEW DATA", reviewData);

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

        <CardApproval />
        <CardApproval />
        <CardApproval />
      </Flex>
    </Flex>
  );
};

export default CasesReviewDashboardPage;
