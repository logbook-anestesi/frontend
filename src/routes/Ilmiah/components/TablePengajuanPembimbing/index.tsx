import { Flex, Text } from "@chakra-ui/react";
import useGetPengajuanPembimbing from "../../hooks/useGetPengajuanPembimbing";
import TableData from "./TableData";
import LoaderCircle from "../../../../components/LoaderCircle";

const TablePengajuanBimbingan = () => {
  const { loading, pengajuanList } = useGetPengajuanPembimbing();

  console.log(pengajuanList);

  return (
    <Flex direction="column">
      <Text fontSize="md" as="b">
        Riwayat Pengajuan Bimbingan
      </Text>

      {loading ? <LoaderCircle /> : <TableData pengajuanList={pengajuanList} />}
    </Flex>
  );
};

export default TablePengajuanBimbingan;
