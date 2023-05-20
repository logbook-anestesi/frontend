import { Flex, Text } from "@chakra-ui/react";
import Ticker from "../../../../components/Ticker";
import { colors } from "../../../../constants/colors";

const StaseCard = () => {
  return (
    <Flex
      direction="column"
      border="1px"
      borderColor={colors.primaryPurple}
      borderRadius="8px"
      padding="12px 16px"
      width="100%"
      gap="4px"
    >
      <Text fontSize="xs">Stase saat ini</Text>
      <Text as="b" color={colors.primaryPurple}>
        Uro-Gimul
      </Text>
      <Flex alignSelf="flex-end">
        <Ticker text="Maret 2023" />
      </Flex>
    </Flex>
  );
};

export default StaseCard;
