import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { getCurrentMonth } from "../../../../helpers";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const RedStaseCard = () => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/stase/create");
  };

  return (
    <Flex
      border="1px"
      borderColor={colors.primaryRed}
      borderRadius="8px"
      padding="12px 4px 12px 16px"
      width="100%"
      gap="4px"
      justify="space-between"
      align="center"
      onClick={handleClickCard}
    >
      <Flex direction="column" gap="5px">
        <Text as="b" color={colors.primaryRed}>
          Perbarui Stase Bulan Ini
        </Text>
        <Text fontSize="sm" color={colors.darkGrey}>
          {getCurrentMonth()}
        </Text>
      </Flex>

      <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
    </Flex>
  );
};

export default RedStaseCard;
