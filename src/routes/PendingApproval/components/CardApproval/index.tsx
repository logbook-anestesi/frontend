import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import profileIcon from "../../assets/profileIcon.png";
import { colors } from "../../../../constants/colors";
import ButtonFile from "../ButtonFile";
import CardApprovalButton from "../CardApprovalButton";
import { ReviewItem } from "../../hooks/useGetAllApprovals/types";
import { useNavigate } from "react-router-dom";

interface Props {
  scientificData: ReviewItem;
}

const CardApproval = ({ scientificData }: Props) => {
  const navigate = useNavigate();

  const handleClickToDetail = () => {
    navigate("/cases/details", {
      state: { caseId: scientificData?.id },
    });
  };

  const handleClickProfile = () => {
    navigate("/profile/other-user", {
      state: { userId: scientificData?.userId },
    });
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Flex direction="column" gap={1}>
          <Text as="b">
            {scientificData?.type}: {scientificData?.title}
          </Text>
          <Flex align="center" gap={3}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text
              color={colors.darkGrey}
              fontSize="sm"
              onClick={handleClickProfile}
            >
              {scientificData?.userName}
            </Text>
          </Flex>
        </Flex>

        <ButtonFile
          title={scientificData?.id.substring(0, 10)}
          handleClick={handleClickToDetail}
        />
      </Flex>

      <CardApprovalButton />

      <Divider mt={5} />
    </Flex>
  );
};

export default CardApproval;
