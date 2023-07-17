import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import TableComponent from "../TableComponent";

const StaseTable = () => {
  return (
    <Flex direction="column" gap="10px">
      <Flex direction="row" justify="space-between" align="center">
        <Text as="b">Riwayat Stase</Text>
        <Text as="b" fontSize="xx-small" color={colors.primaryPurple}>
          Lihat Daftar Stase
        </Text>
      </Flex>

      <TableComponent />
    </Flex>
  );
};

export default StaseTable;
