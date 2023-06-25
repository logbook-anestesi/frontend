import { Divider, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../../../constants/colors";

interface Props {
  staseName: string;
  lecturer: string;
}

const CardStase = ({ lecturer, staseName }: Props) => {
  return (
    <Flex direction="column" mt={2}>
      <Text fontSize="sm" fontWeight="bold">
        {staseName}
      </Text>
      <Text fontSize="sm" color={colors.darkGrey}>
        Ketua: {lecturer}
      </Text>
      <Divider color={colors.darkGrey} mt={2} />
    </Flex>
  );
};

export default CardStase;
