import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AnesthesiaType,
  ProcedureType,
} from "../../hooks/useGetCasesForm/types";
import { useState } from "react";
import ModalProcedureType from "../ModalProcedureType";
import Ticker from "../../../../components/Ticker";
import { useAddCasesContext } from "../../contexts";
import ModalAddOtherTypeProcedure from "../ModalAddOtherTypeProcedure";

interface Props {
  procedureList: ProcedureType[];
}

const FormTypeProcedure = ({ procedureList }: Props) => {
  const { selectedProcedure } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [procedure, setProcedure] = useState<AnesthesiaType>();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Procedure Done*
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
        <Text>{procedure?.name || "Masukkan nama procedur ..."}</Text>

        <ChevronRightIcon boxSize={7} />
      </Flex>

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {selectedProcedure.map((procedure, idx) => (
          <Ticker text={procedure} key={idx} />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalProcedureType
        closeModal={onClose}
        isOpen={isOpen}
        procedureList={procedureList}
        setProcedure={setProcedure}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherTypeProcedure
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormTypeProcedure;
