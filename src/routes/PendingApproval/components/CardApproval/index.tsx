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

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Flex direction="column">
          <Text as="b">
            {scientificData?.type}: {scientificData?.title}
          </Text>
          <Flex align="center" gap={1}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text color={colors.darkGrey} fontSize="sm">
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
