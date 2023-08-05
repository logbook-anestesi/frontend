import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface Props {
  label: string;
  value: string;
}

const FieldText = ({ label, value }: Props) => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        {label}
      </Text>
      <Text as="b" fontSize="sm">
        {value}
      </Text>
    </Flex>
  );
};

export default FieldText;
