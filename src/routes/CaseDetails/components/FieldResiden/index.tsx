import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FieldResiden = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Residen
      </Text>
      <Text as="b" fontSize="sm">
        Ari Angga Nugraha
      </Text>
    </Flex>
  );
};

export default FieldResiden;
