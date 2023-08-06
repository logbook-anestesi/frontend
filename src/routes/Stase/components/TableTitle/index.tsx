import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";

const TableTitle = () => {
  const navigate = useNavigate();

  const navigateToListStase = () => {
    navigate("/stase/all");
  };
  return (
    <Flex direction="column" gap="10px">
      <Flex direction="row" justify="space-between" align="center">
        <Text as="b">Riwayat Stase</Text>
        <Text
          as="b"
          fontSize="x-small"
          cursor="pointer"
          color={colors.primaryPurple}
          onClick={navigateToListStase}
        >
          Lihat Daftar Stase
        </Text>
      </Flex>
    </Flex>
  );
};

export default TableTitle;
