import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FieldDPJP = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        DPJP
      </Text>
      <Text as="b" fontSize="sm">
        dr. Erlangga
      </Text>
    </Flex>
  );
};

export default FieldDPJP;
