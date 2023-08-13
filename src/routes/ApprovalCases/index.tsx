import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";

const ApprovalCases = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Pending Cases" />

      <Flex padding="30px" direction="column" gap="16px"></Flex>
    </Flex>
  );
};

export default ApprovalCases;
