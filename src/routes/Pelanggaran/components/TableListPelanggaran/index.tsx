import { Flex, Text } from '@chakra-ui/react';
import useGetAllPelanggaran from '../../hooks/useGetAllPelanggaran';
import LoaderCircle from '../../../../components/LoaderCircle';
import TableData from '../TableData';

const TableListPelanggaran = () => {
  const { loading, pelanggaranList } = useGetAllPelanggaran();

  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Daftar Laporan Pelanggaran
      </Text>

      {loading || !pelanggaranList ? (
        <LoaderCircle />
      ) : (
        <TableData pelanggaranList={pelanggaranList} />
      )}
    </Flex>
  );
};

export default TableListPelanggaran;
