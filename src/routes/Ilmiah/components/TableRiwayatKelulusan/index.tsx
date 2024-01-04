import { Flex, Text } from '@chakra-ui/react';
import TableData from './TableData';
import useGetRiwayatKelulusan from '../../hooks/useGetRiwayatKelulusan';
import LoaderCircle from '../../../../components/LoaderCircle';
import { ScientificLog } from '../../hooks/useGetPengajuanPembimbing/types';

interface Props {
  setSelectedHistory: React.Dispatch<React.SetStateAction<ScientificLog[]>>;
  onOpenSeeMore: () => void;
}

const TableRiwayatKelulusan = ({
  onOpenSeeMore,
  setSelectedHistory,
}: Props) => {
  const { loading, riwayatKelulusan } = useGetRiwayatKelulusan();
  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Riwayat Pengajuan Kelulusan
      </Text>

      {loading || !riwayatKelulusan ? (
        <LoaderCircle />
      ) : (
        <TableData
          riwayatKelulusan={riwayatKelulusan}
          onOpenSeeMore={onOpenSeeMore}
          setSelectedHistory={setSelectedHistory}
        />
      )}
    </Flex>
  );
};

export default TableRiwayatKelulusan;
