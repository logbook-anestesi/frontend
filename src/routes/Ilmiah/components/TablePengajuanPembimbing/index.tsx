import { Flex, Text } from "@chakra-ui/react";
import useGetPengajuanPembimbing from "../../hooks/useGetPengajuanPembimbing";
import TableData from "./TableData";
import LoaderCircle from "../../../../components/LoaderCircle";

interface Props {
  onOpenModal: () => void;
}

const TablePengajuanBimbingan = ({ onOpenModal }: Props) => {
  const { loading, pengajuanList } = useGetPengajuanPembimbing();

  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Riwayat Pengajuan Bimbingan
      </Text>

      {loading || !pengajuanList ? (
        <LoaderCircle />
      ) : (
        <TableData pengajuanList={pengajuanList} onOpenModal={onOpenModal} />
      )}
    </Flex>
  );
};

export default TablePengajuanBimbingan;
