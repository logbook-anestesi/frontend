import { Flex, Text } from "@chakra-ui/react";
import TableData from "./TableData";
import useGetRiwayatKelulusan from "../../hooks/useGetRiwayatKelulusan";
import LoaderCircle from "../../../../components/LoaderCircle";

const TableRiwayatKelulusan = () => {
  const { loading, riwayatKelulusan } = useGetRiwayatKelulusan();
  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Riwayat Pengajuan Kelulusan
      </Text>

      {loading || !riwayatKelulusan ? (
        <LoaderCircle />
      ) : (
        <TableData riwayatKelulusan={riwayatKelulusan} />
      )}
    </Flex>
  );
};

export default TableRiwayatKelulusan;
