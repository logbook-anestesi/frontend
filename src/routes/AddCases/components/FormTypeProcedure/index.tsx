import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ModalTypeProcedure from "../ModalTypeProcedure";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { useState } from "react";

interface Props {
  anasthesiaList: AnesthesiaType[];
}

const FormTypeProcedure = ({ anasthesiaList }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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

      <ModalTypeProcedure
        closeModal={onClose}
        isOpen={isOpen}
        anasthesiaList={anasthesiaList}
        setAnesthesia={setAnesthesia}
      />
    </Flex>
  );
};

export default FormTypeProcedure;
