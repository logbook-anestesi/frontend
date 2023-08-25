import { Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const Information = () => {
  return (
    <Text align="center" fontSize="sm" px={8} color={colors.darkGrey}>
      Mohon pastikan data yang Anda input sudah benar
    </Text>
  );
};

export default Information;
