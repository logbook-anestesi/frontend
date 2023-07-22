import { Flex, Text } from "@chakra-ui/react";
import { Divider } from "antd";
import { SubCategory } from ".";

interface Props {
  subCategory: SubCategory;
}

const CardSubCategory = ({ subCategory }: Props) => {
  return (
    <Flex
      direction="column"
      fontSize="md"
      // onClick={handleClickCard}
    >
      <Text>{subCategory.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardSubCategory;
