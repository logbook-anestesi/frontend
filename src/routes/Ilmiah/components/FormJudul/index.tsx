import { Flex, Input, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FormJudul = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Judul
      </Text>

      <Input placeholder="Masukkan judul tugas..." />
    </Flex>
  );
};

export default FormJudul;
