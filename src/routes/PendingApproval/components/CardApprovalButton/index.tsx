import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const CardApprovalButton = () => {
  return (
    <Flex justify="end" gap={4}>
      <Flex
        border="2px"
        borderColor={colors.primaryGreen}
        borderRadius={8}
        padding={1.5}
      >
        <CheckIcon color={colors.primaryGreen} />
      </Flex>
      <Flex
        border="2px"
        borderColor={colors.primaryRed}
        borderRadius={8}
        padding={1.5}
      >
        <CloseIcon color={colors.primaryRed} />
      </Flex>
    </Flex>
  );
};

export default CardApprovalButton;
