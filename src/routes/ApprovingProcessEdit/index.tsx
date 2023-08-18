import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormRadioAgeGroup from "./components/FormRadioAgeGroup";

const ApprovingProcessEdit = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        <FormRadioAgeGroup />
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
