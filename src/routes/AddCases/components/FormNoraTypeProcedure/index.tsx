import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NoraProcedureType } from "../../hooks/useGetCasesForm/types";
import { useState } from "react";
import ModalNoraProcedureType from "../ModalNoraProcedureType";
import Ticker from "../../../../components/Ticker";
import { useAddCasesContext } from "../../contexts";
// import ModalAddOtherTypeProcedure from "../ModalAddOtherTypeProcedure";

interface Props {
  noraProcedureList: NoraProcedureType[];
}

const FormNoraTypeProcedure = ({ noraProcedureList }: Props) => {
  const { selectedNoraProcedure } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    // isOpen: isOpenAddOther,
    // onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [noraProcedure, setNoraProcedure] = useState<NoraProcedureType>();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Nora Procedure Type
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
        <Text>{noraProcedure?.name || "Masukkan nama prosedur ..."}</Text>

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
        {selectedNoraProcedure.map((procedure, idx) => (
          <Ticker text={procedure} key={idx} isShowClose />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalNoraProcedureType
        closeModal={onClose}
        isOpen={isOpen}
        noraProcedureList={noraProcedureList}
        setNoraProcedure={setNoraProcedure}
        onOpenAddOther={onOpenAddOther}
      />

      {/* <ModalAddOtherTypeProcedure
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      /> */}
    </Flex>
  );
};

export default FormNoraTypeProcedure;
