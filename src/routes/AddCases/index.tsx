import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";
import FormDPJP from "./components/FormDPJP";

const AddCases = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Tambah OK/Surgery" />

      <Flex padding="30px" direction="column" gap={3}>
        <FormDate />
        <FormDPJP />
      </Flex>
    </Flex>
  );
};

export default AddCases;
