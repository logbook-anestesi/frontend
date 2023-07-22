import { Divider, Flex, Text } from "@chakra-ui/react";
import { SubCategory } from ".";
import { useAddCasesDispatch } from "../../contexts";

interface Props {
  subCategory: SubCategory;
  closeModal: () => void;
}

const CardSubCategory = ({ subCategory, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    closeModal();
    casesDispatch({
      type: "set_selected_operation",
      data: {
        operation: subCategory.name,
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
