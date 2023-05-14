import { Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { headers } from "./styles";
import { colors } from "../../constants/colors";

interface HeaderInterface {
  title: string;
  onClick: () => void;
}

const Header = ({ title, onClick }: HeaderInterface) => {
  return (
    <Flex className={headers} alignItems="center" gap={5}>
      <ChevronLeftIcon
        width={33}
        height={33}
        backgroundColor="#EAEAEA"
        borderRadius="10px"
        color={colors.primaryPurple}
        onClick={onClick}
      />

      <Text fontWeight="bold" color={colors.primaryPurple} fontSize="20px">
        {title}
      </Text>
    </Flex>
  );
};

export default Header;
