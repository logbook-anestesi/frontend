import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FieldExam = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Merupakan Exam
      </Text>
      <Text as="b" fontSize="sm">
        Ya
      </Text>
    </Flex>
  );
};

export default FieldExam;
