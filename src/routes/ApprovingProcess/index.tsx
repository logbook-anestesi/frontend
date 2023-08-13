import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import RadioPenilaian from "./components/RadioPenilaian";
import TextPenilaian from "./components/TextPenilaian";
import { colors } from "../../constants/colors";
import ModalApprove from "./components/ModalApprove";

const ApprovingProcess = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        <RadioPenilaian />
        <TextPenilaian />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={10}
          onClick={onOpen}
        >
          Approve
        </Button>
      </Flex>

      {/* Modal Section */}
      <ModalApprove closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default ApprovingProcess;
