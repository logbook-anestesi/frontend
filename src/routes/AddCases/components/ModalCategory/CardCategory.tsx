import { Divider, Flex, Text } from "@chakra-ui/react";
import { Category } from ".";
import { Dispatch, SetStateAction } from "react";

interface Props {
  category: Category;
  closeModal: () => void;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

const CardCategory = ({ closeModal, category, setCategory }: Props) => {
  const handleClickCard = () => {
    setCategory(category);
    closeModal();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{category.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardCategory;
