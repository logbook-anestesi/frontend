import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ModalTypeProcedure from "../ModalTypeProcedure";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { useState } from "react";
import ModalAddOther from "../ModalAddOther";

interface Props {
  anesthesiaList: AnesthesiaType[];
}

const FormTypeProcedure = ({ anesthesiaList }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [anesthesia, setAnesthesia] = useState<AnesthesiaType>();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Anastesi*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>{anesthesia?.name || "Masukkan tipe anastesi ..."}</Text>

        <ChevronRightIcon boxSize={7} />
      </Flex>

      {/* Modal Section */}
      <ModalTypeProcedure
        closeModal={onClose}
        isOpen={isOpen}
        anesthesiaList={anesthesiaList}
        setAnesthesia={setAnesthesia}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOther isOpen={isOpenAddOther} closeModal={onCloseAddOther} />
    </Flex>
  );
};

export default FormTypeProcedure;
