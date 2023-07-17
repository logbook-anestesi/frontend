import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../constants/colors";

interface TickerInterface {
  text: string;
}

const Ticker = ({ text }: TickerInterface) => {
  return (
    <Flex
      padding="3px 8px"
      backgroundColor="rgba(102, 45, 145, 0.1)"
      align="center"
      borderRadius="6px"
      width="fit-content"
    >
      <Text
        as="b"
        color={colors.primaryPurple}
        fontSize="10px"
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Ticker;
