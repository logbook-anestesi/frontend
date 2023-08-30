import { Flex, Text } from "@chakra-ui/react";
import TableData from "./TableData";
import useGetRiwayatKelulusan from "../../hooks/useGetRiwayatKelulusan";
import LoaderCircle from "../../../../components/LoaderCircle";

// interface Props {
//   onOpenModal: () => void;
// }

const TableRiwayatKelulusan = () => {
  const { loading, riwayatKelulusan } = useGetRiwayatKelulusan();
  return (
    <Flex direction="column">
      <Text fontSize="md" as="b">
        Riwayat Pengajuan Kelulusan
      </Text>

      {loading ? (
        <LoaderCircle />
      ) : (
        <TableData riwayatKelulusan={riwayatKelulusan} />
      )}
    </Flex>
  );
};

export default TableRiwayatKelulusan;
