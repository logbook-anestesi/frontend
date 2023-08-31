import { Flex, Text } from "@chakra-ui/react";
import { Diskusi } from "../../hooks/useGetDetailKelulusan/types";
import TableData from "./TableData";

interface Props {
  riwayatDiskusi: Diskusi[];
}

const RiwayatDiskusi = ({ riwayatDiskusi }: Props) => {
  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Riwayat Diskusi
      </Text>

      <TableData riwayatDiskusi={riwayatDiskusi} />
    </Flex>
  );
};

export default RiwayatDiskusi;
