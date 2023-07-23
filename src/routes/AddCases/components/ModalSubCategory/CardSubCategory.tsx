import { Divider, Flex, Text } from "@chakra-ui/react";
import { useAddCasesDispatch } from "../../contexts";
import { OperationCategory } from "../../hooks/useGetCasesForm/types";

interface Props {
  subCategory: OperationCategory;
  closeModal: () => void;
  operationName: string;
}

const CardSubCategory = ({ subCategory, closeModal, operationName }: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    closeModal();
    casesDispatch({
      type: "set_selected_operation",
      data: {
        operation: {
          operation: subCategory.name,
          category: operationName,
        },
      },
    });
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{subCategory.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardSubCategory;
