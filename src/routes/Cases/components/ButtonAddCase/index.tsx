import { Button, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";

interface Props {
  caseName: string;
}

const ButtonAddCase = ({ caseName }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/cases/add/ok");
  };

  return (
    <Button
      variant="outline"
      borderColor={colors.primaryPurple}
      color={colors.primaryPurple}
      borderRadius={10}
      onClick={handleOnClick}
    >
      <Text as="b">+ Tambah {caseName}</Text>
    </Button>
  );
};

export default ButtonAddCase;
