import { Flex, Text, Textarea } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const TextPenilaian = () => {
  return (
    <Flex direction="column" gap={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Komentar
      </Text>

      <Textarea placeholder="XYZ123" />
    </Flex>
  );
};

export default TextPenilaian;
