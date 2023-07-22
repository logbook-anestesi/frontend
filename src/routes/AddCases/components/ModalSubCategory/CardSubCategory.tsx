import { Divider, Flex, Text } from "@chakra-ui/react";
import { SubCategory } from ".";
import { useAddCasesDispatch } from "../../contexts";

interface Props {
  subCategory: SubCategory;
  closeModal: () => void;
  category: string;
}

const CardSubCategory = ({ subCategory, closeModal, category }: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    closeModal();
    casesDispatch({
      type: "set_selected_operation",
      data: {
        operation: {
          operation: subCategory.name,
          category: category,
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
