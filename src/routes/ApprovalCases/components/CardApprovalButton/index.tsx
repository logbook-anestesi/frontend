import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const CardApprovalButton = () => {
  return (
    <Flex justify="end" gap={4}>
      <Button
        leftIcon={<EditIcon />}
        color={colors.primaryPurple}
        borderColor={colors.primaryPurple}
        variant="outline"
        size="xs"
        py={4}
      >
        Edit & Approve
      </Button>
      <Button
        leftIcon={<CheckIcon />}
        variant="outline"
        color={colors.primaryGreen}
        borderColor={colors.primaryGreen}
        size="xs"
        py={4}
      >
        Approve
      </Button>
      <Button
        leftIcon={<CloseIcon />}
        color={colors.primaryRed}
        borderColor={colors.primaryRed}
        variant="outline"
        size="xs"
        py={4}
      >
        Reject
      </Button>
    </Flex>
  );
};

export default CardApprovalButton;
