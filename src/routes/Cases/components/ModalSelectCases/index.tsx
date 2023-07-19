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

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalSelectCases = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={2}>
        <ModalHeader>Pilih Case</ModalHeader>
        <ModalCloseButton />
        {CASE_LIST?.map((dataCase, idx) => {
          return (
            <Flex direction="column" mb={2} mt={2}>
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
