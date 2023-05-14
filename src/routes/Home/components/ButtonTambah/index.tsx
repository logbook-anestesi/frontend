import { Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";

const ButtonTambah = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        leftIcon={<AddIcon />}
        borderColor={colors.primaryPurple}
        variant="outline"
        color={colors.primaryPurple}
        width="100%"
      >
        Tambah Cases
      </Button>
    </Stack>
  );
};

export default ButtonTambah;
