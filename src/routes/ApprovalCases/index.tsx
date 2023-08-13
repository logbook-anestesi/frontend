import { Button, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import CardApproval from "./components/CardApproval";

const ApprovalCases = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Pending Cases" />

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

export default ApprovalCases;
