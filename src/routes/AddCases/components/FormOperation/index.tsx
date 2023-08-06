import { useCallback, useState } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";

import { colors } from "../../../../constants/colors";
import Ticker from "../../../../components/Ticker";
import { useAddCasesContext, useAddCasesDispatch } from "../../contexts";
import ModalCategory from "../ModalCategory";
import { OperationType } from "../../hooks/useGetCasesForm/types";
import ModalSubCategory from "../ModalSubCategory";

interface Props {
  formData?: OperationType[];
}

const FormOperation = ({ formData }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedOperation } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSub,
    onClose: onCloseSub,
    onOpen: onOpenSub,
  } = useDisclosure();
  const [operation, setOperation] = useState<OperationType>();

  const handleRemoveOperation = useCallback(
    (operationId: string) => {
      casesDispatch({
        type: "remove_operation_type",
        data: {
          id: operationId,
        },
      });
    },
    [casesDispatch]
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
