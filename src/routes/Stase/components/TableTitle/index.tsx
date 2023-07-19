import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

const TableTitle = () => {
  return (
    <Flex direction="column" gap="10px">
      <Flex direction="row" justify="space-between" align="center">
        <Text as="b">Riwayat Stase</Text>
        <Text as="b" fontSize="x-small" color={colors.primaryPurple}>
          Lihat Daftar Stase
        </Text>
      </Flex>
    </Flex>
  );
};

export default TableTitle;
