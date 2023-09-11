import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NoraProcedureType } from "../../../../hooks/useGetCasesForm/types";
import { useCallback, useEffect, useState } from "react";
import ModalNoraProcedureType from "../ModalNoraProcedureType";
import Ticker from "../../../../components/Ticker";
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from "../../contexts";
import { Nora } from "../../../Cases/hooks/useGetCases/types";

interface Props {
  noraProcedureList?: NoraProcedureType[];
  initialValue?: Nora[];
}

const FormNoraTypeProcedure = ({ noraProcedureList, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedNoraProcedure } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    // isOpen: isOpenAddOther,
    // onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [noraProcedure, setNoraProcedure] = useState<NoraProcedureType>();

  useEffect(() => {
    const normalizeNora = initialValue?.map((nora) => {
      return {
        title: nora.noraProcedureTypeName,
        id: nora.noraProcedureTypeId,
      };
    });

    const normalizeIds = initialValue?.map((nora) => nora.noraProcedureTypeId);

    approveEditDispatch({
      type: "set_nora_procedure_type_all",
      data: {
        nora: normalizeNora || [],
        noraIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const handleRemoveAsaTag = useCallback(
    (noraId: string) => {
      approveEditDispatch({
        type: "remove_nora_procedure",
        data: {
          id: noraId,
        },
      });
    },
    [approveEditDispatch]
  );

  return (
    <Flex direction="column" gap={1}>
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
        onClick={onOpen}
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
        {selectedNoraProcedure.map((noraProcedure, idx) => (
          <Ticker
            text={noraProcedure.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveAsaTag(noraProcedure.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalNoraProcedureType
        closeModal={onClose}
        isOpen={isOpen}
        noraProcedureList={noraProcedureList || []}
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
