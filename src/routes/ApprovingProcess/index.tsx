import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import RadioPenilaian from "./components/RadioPenilaian";
import TextPenilaian from "./components/TextPenilaian";
import { colors } from "../../constants/colors";
import ModalApprove from "./components/ModalApprove";
import { useLocation } from "react-router-dom";

const ApprovingProcess = () => {
  const location = useLocation();
  const { isReject, caseData } = location?.state;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex flexDirection="column">
      <Header
        title={`${isReject ? "Reject" : "Approve"} ${
          caseData?.caseType
        } - ${caseData?.id.substring(0, 4)}`}
      />

      <Flex padding="30px" direction="column" gap="16px">
        {!isReject && <RadioPenilaian />}
        <TextPenilaian />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={10}
          onClick={onOpen}
        >
          {isReject ? "Reject" : "Approve"}
        </Button>
      </Flex>

      {/* Modal Section */}
      <ModalApprove closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default ApprovingProcess;
