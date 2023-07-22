import { Divider, Flex, Text } from "@chakra-ui/react";
import { SubCategory } from ".";

interface Props {
  subCategory: SubCategory;
}

const CardSubCategory = ({ subCategory }: Props) => {
  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      // onClick={handleClickCard}
    >
      <Text>{subCategory.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardSubCategory;
