import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import CardApproval from "./components/CardApproval";

const PendingApproval = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Pending Approval" />

      <Flex padding="30px" direction="column" gap="16px">
        <CardApproval />
        <CardApproval />
        <CardApproval />
      </Flex>
    </Flex>
  );
};

export default PendingApproval;
