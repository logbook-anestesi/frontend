import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import RadioPenilaian from "./components/RadioPenilaian";
import TextPenilaian from "./components/TextPenilaian";

const ApprovingProcess = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        <RadioPenilaian />
        <TextPenilaian />
      </Flex>
    </Flex>
  );
};

export default ApprovingProcess;
