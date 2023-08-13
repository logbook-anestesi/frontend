import { Flex, Image, Text } from "@chakra-ui/react";
import profileIcon from "../../assets/profileIcon.png";
import { colors } from "../../../../constants/colors";

const CardApproval = () => {
  return (
    <Flex direction="column">
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={1}>
        <Text as="b">Cases: OK/Surgery</Text>
        <Flex align="center" gap={1}>
          <Image src={profileIcon} alt="" width={3} height={4} />
          <Text color={colors.darkGrey} fontSize="sm">
            dr. Dian Sastrowardoyo
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardApproval;
