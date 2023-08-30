import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const ListSPSKPS = () => {
  return (
    <Flex direction="column" gap={3}>
      <Text color={colors.darkGrey}>Penentu Kelulusan</Text>
      <Text backgroundColor={colors.lightGrey} py={2} px={4} borderRadius={10}>
        dr. Budi Haris (Ketua SPS)
      </Text>
      <Text backgroundColor={colors.lightGrey} py={2} px={4} borderRadius={10}>
        dr. Arya Hakim (Ketua KPS)
      </Text>
    </Flex>
  );
};

export default ListSPSKPS;
