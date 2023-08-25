import { Flex, Select, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const FormTipeIlmiah = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Ilmiah
      </Text>

      <Select placeholder="Pilih tipe ilmiah">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
};

export default FormTipeIlmiah;
