import { Flex, Text } from '@chakra-ui/react';
import useGetPengajuanPembimbing from '../../hooks/useGetPengajuanPembimbing';
import TableData from './TableData';
import LoaderCircle from '../../../../components/LoaderCircle';
import { ScientificLog } from '../../hooks/useGetPengajuanPembimbing/types';

interface Props {
  onOpenModal: () => void;
  setSelectedHistory: React.Dispatch<React.SetStateAction<ScientificLog[]>>;
  onOpenSeeMore: () => void;
}

const TablePengajuanBimbingan = ({
  onOpenModal,
  setSelectedHistory,
  onOpenSeeMore,
}: Props) => {
  const { loading, pengajuanList } = useGetPengajuanPembimbing();

  return (
    <Flex direction="column">
      <Text fontSize="md" as="b" mb={5}>
        Riwayat Maju Ilmiah
      </Text>

      {loading || !pengajuanList ? (
        <LoaderCircle />
      ) : (
        <TableData
          pengajuanList={pengajuanList}
          onOpenModal={onOpenModal}
          setSelectedHistory={setSelectedHistory}
          onOpenSeeMore={onOpenSeeMore}
        />
      )}
    </Flex>
  );
};

export default TablePengajuanBimbingan;
