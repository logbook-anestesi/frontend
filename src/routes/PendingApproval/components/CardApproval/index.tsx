import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import profileIcon from "../../assets/profileIcon.png";
import { colors } from "../../../../constants/colors";
import ButtonFile from "../ButtonFile";
import CardApprovalButton from "../CardApprovalButton";

const CardApproval = () => {
  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Flex direction="column">
          <Text as="b">Cases: OK/Surgery</Text>
          <Flex align="center" gap={1}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text color={colors.darkGrey} fontSize="sm">
              dr. Dian Sastrowardoyo
            </Text>
          </Flex>
        </Flex>

        <ButtonFile title="C-OK24-L" />
      </Flex>

      <CardApprovalButton />

      <Divider mt={5} />
    </Flex>
  );
};

export default CardApproval;
