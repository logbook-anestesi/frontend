import { Flex, Text } from '@chakra-ui/react';

const TableListPelanggaran = () => {
  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Daftar Laporan Pelanggaran
      </Text>

      {/* {loading || !pengajuanList ? (
        <LoaderCircle />
      ) : (
        <TableData pengajuanList={pengajuanList} onOpenModal={onOpenModal} />
      )} */}
    </Flex>
  );
};

export default TableListPelanggaran;
