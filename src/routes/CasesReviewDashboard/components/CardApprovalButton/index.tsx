import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";
import { ReviewItem } from "../../hooks/useGetPendingReview/types";

interface Props {
  caseData: ReviewItem;
  onClick: (caseId: string) => void;
}

const CardApprovalButton = ({ caseData, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClickReview = (isReject: boolean) => {
    const state = {
      isReject: isReject,
      caseData: caseData,
    };

    navigate("/review/process", {
      state: state,
    });
  };

  const handleOnClick = () => {
    navigate("/review/process/edit", {
      state: {
        caseId: caseData?.id,
      },
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
        onClick={handleOnClick}
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
        onClick={() => onClick(caseData?.id)}
      >
        Reject
      </Button>
    </Flex>
  );
};

export default CardApprovalButton;
