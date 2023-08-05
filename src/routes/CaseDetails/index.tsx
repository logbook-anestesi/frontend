import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FieldDPJP from "./components/FieldDPJP";
import FieldResiden from "./components/FieldResiden";
import FieldExam from "./components/FieldExam";

const CaseDetails = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/case" title="Case Detail" />

      <Flex padding="30px" direction="column" gap={4}>
        <FieldResiden />
        <FieldDPJP />
        <FieldExam />
      </Flex>
    </Flex>
  );
};

export default CaseDetails;
