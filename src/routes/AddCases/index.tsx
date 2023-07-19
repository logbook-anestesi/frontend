import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";

const AddCases = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Pembaruan Stase" />

      <Flex padding="30px" direction="column" gap={10}>
        <FormDate />
      </Flex>
    </Flex>
  );
};

export default AddCases;
