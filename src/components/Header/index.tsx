import { Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { headers } from "./styles";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

interface HeaderInterface {
  title: string;
  pathBack?: string;
}

const Header = ({ title, pathBack }: HeaderInterface) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (pathBack) {
      navigate(pathBack);
      return;
    }

    navigate(-1);
  };

  return (
    <Flex className={headers} alignItems="center" gap={5}>
      <ChevronLeftIcon
        width={33}
        height={33}
        backgroundColor="#EAEAEA"
        borderRadius="10px"
        color={colors.primaryPurple}
        onClick={handleBack}
      />

      <Text fontWeight="bold" color={colors.primaryPurple} fontSize="20px">
        {title}
      </Text>
    </Flex>
  );
};

export default Header;
