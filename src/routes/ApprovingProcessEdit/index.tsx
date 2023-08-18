import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";

const ApprovingProcessEdit = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px"></Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
