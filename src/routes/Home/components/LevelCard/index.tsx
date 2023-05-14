import { Card, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";

interface LevelCardInterface {
  type: string;
  title: string;
}

const LevelCard = ({ type, title }: LevelCardInterface) => {
  return (
    <Card
      variant="outline"
      padding="16px"
      direction={{ base: "row", sm: "row" }}
      justify="space-between"
      align="center"
    >
      <Flex direction="column">
        <Text fontSize="sm" color={colors.darkGrey}>
          {type}
        </Text>
        <Text
          fontSize="md"
          as="b"
          color={type === "Level Kompetensi" ? colors.primaryRed : "black"}
        >
          {title}
        </Text>
      </Flex>

      <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
    </Card>
  );
};

export default LevelCard;
