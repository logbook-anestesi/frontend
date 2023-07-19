import { Button, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface Props {
  caseName: string;
}

const ButtonAddCase = ({ caseName }: Props) => {
  return (
    <Button
      variant="outline"
      borderColor={colors.primaryPurple}
      color={colors.primaryPurple}
      borderRadius={10}
    >
      <Text as="b">+ Tambah {caseName}</Text>
    </Button>
  );
};

export default ButtonAddCase;
