import { Flex, Select, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FormDosenPembimbing = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Pembimbing
      </Text>

      <Select placeholder="Pilih pembimbing">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Text fontSize="sm" color={colors.primaryPurple} as="b" pl={2} pt={2}>
        + Tambah Pembimbing
      </Text>
    </Flex>
  );
};

export default FormDosenPembimbing;
