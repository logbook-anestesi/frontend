import { Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { colors } from "../../constants/colors";

interface ButtonTambahInterface {
  buttonTitle: string;
  onClick?: () => void;
}

const ButtonTambah = ({ buttonTitle, onClick }: ButtonTambahInterface) => {
  return (
    <Stack direction="row" spacing={4} onClick={onClick}>
      <Button
        leftIcon={<AddIcon />}
        borderColor={colors.primaryPurple}
        variant="outline"
        color={colors.primaryPurple}
        width="100%"
      >
        {buttonTitle}
      </Button>
    </Stack>
  );
};

export default ButtonTambah;
