import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { CloseIcon } from "@chakra-ui/icons";

interface TickerInterface {
  text: string;
  onClick?: () => void;
  isShowClose: boolean;
}

const Ticker = ({ text, onClick, isShowClose }: TickerInterface) => {
  return (
    <Flex
      padding="3px 8px"
      backgroundColor="rgba(102, 45, 145, 0.1)"
      align="center"
      borderRadius="6px"
      minWidth="fit-content"
      gap={2}
    >
      <Text
        as="b"
        color={colors.primaryPurple}
        fontSize="10px"
        textAlign="center"
      >
        {text}
      </Text>

      {isShowClose && (
        <CloseIcon w={2} color={colors.primaryPurple} onClick={onClick} />
      )}
    </Flex>
  );
};

export default Ticker;
