import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";

const CardApprovalButton = () => {
  const navigate = useNavigate();

  const handleClickReview = (isReject: boolean) => {
    const state = {
      isReject: isReject,
    };

    navigate("/review/process", {
      state: state,
    });
  };

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
        onClick={() => handleClickReview(false)}
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
        onClick={() => handleClickReview(true)}
      >
        Reject
      </Button>
    </Flex>
  );
};

export default CardApprovalButton;
