import {
  Divider,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { CASE_LIST } from "../../../../constants/caseList";
import { colors } from "../../../../constants/colors";
import { Case } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalSelectCases = ({ isOpen, closeModal }: Props) => {
  const navigate = useNavigate();

  const handleClickCase = (dataCase: Case) => {
    switch (dataCase?.value) {
      case "OK": {
        navigate("/cases/add/ok");
        return;
      }
      case "PACU": {
        navigate("/cases/add/pacu");
        return;
      }
      case "NORA": {
        navigate("/cases/add/nora");
        return;
      }
      case "RESUS": {
        navigate("/cases/add/resus");
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={2}>
        <ModalHeader>Pilih Case</ModalHeader>
        <ModalCloseButton />
        {CASE_LIST?.map((dataCase) => {
          return (
            <Flex
              direction="column"
              mb={2}
              mt={2}
              onClick={() => handleClickCase(dataCase)}
              key={dataCase.value}
            >
              <Text fontSize="sm" align="center">
                {dataCase.title}
              </Text>
              <Divider color={colors.darkGrey} mt={2} />
            </Flex>
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectCases;
