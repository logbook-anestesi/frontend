import { useCallback, useEffect, useState } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";

import { colors } from "../../../../constants/colors";
import Ticker from "../../../../components/Ticker";
import ModalCategory from "../ModalCategory";
import { OperationType } from "../../hooks/useGetCasesForm/types";
import { OperationType as InitialTypes } from "../../../Cases/hooks/useGetCases/types";
import ModalSubCategory from "../ModalSubCategory";
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from "../../contexts";

interface Props {
  formData?: OperationType[];
  initialValue?: InitialTypes[];
}

const FormOperation = ({ formData, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedOperation } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSub,
    onClose: onCloseSub,
    onOpen: onOpenSub,
  } = useDisclosure();
  const [operation, setOperation] = useState<OperationType>();

  useEffect(() => {
    const normalizeOperation = initialValue?.map((operation) => {
      return {
        category: "lorem",
        operation: operation?.operationTypeName,
        id: operation?.operationTypeId,
      };
    });

    const normalizeIds = initialValue?.map(
      (operation) => operation.operationTypeId
    );

    approveEditDispatch({
      type: "set_selected_operation_all",
      data: {
        operations: normalizeOperation || [],
        operationIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const handleRemoveOperation = useCallback(
    (operationId: string) => {
      approveEditDispatch({
        type: "remove_operation_type",
        data: {
          id: operationId,
        },
      });
    },
    [approveEditDispatch]
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Operasi*
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
        <Text>{operation?.name || "Tambah Tipe Operasi"}</Text>

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
        {selectedOperation.map((operation, idx) => (
          <Ticker
            text={`${operation.category}: ${operation.operation}`}
            key={idx}
            onClick={() => handleRemoveOperation(operation.id)}
            isShowClose
          />
        ))}
      </Flex>

      {/* Modal */}
      <ModalCategory
        closeModal={onClose}
        isOpen={isOpen}
        onOpenSub={onOpenSub}
        setOperation={setOperation}
        operationType={formData}
      />

      <ModalSubCategory
        closeModal={onCloseSub}
        isOpen={isOpenSub}
        operationName={operation?.name || "-"}
        subCategoryOperation={operation?.children || []}
      />
    </Flex>
  );
};

export default FormOperation;
