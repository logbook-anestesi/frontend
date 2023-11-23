import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import {
  PengajuanPembimbing,
  ScientificLog,
} from '../../hooks/useGetPengajuanPembimbing/types';
import { convertDateForIlmiah } from '../../../../helpers';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useIlmiahDispatch } from '../../contexts';
import { customStyles } from '../../../../constants/tableFormat';
import { convertUnderscoresToSpaces } from '../../../../helpers';

interface DataRow {
  idx: number;
  id: string;
  type: string;
  title: string;
  history: string;
  approvals: string;
  status: string;
  historyLength: number;
}

interface Props {
  pengajuanList: PengajuanPembimbing[];
  onOpenModal: () => void;
  setSelectedHistory: React.Dispatch<React.SetStateAction<ScientificLog[]>>;
  onOpenSeeMore: () => void;
}

const TableData = ({
  pengajuanList,
  onOpenModal,
  setSelectedHistory,
  onOpenSeeMore,
}: Props) => {
  const ilmiahDispatch = useIlmiahDispatch();

  const handleClickStatus = ({
    status,
    ilmiahId,
  }: {
    status: string;
    ilmiahId: string;
  }) => {
    if (status !== 'SCIENTIFIC_APPROVED') {
      return;
    }

    const dataIlmiah = pengajuanList.find((data) => data.id === ilmiahId);
    const approvals = dataIlmiah?.approvals.map((approval) => approval.name);

    ilmiahDispatch({
      type: 'set_pengajuan_kelulusan',
      data: {
        id: dataIlmiah?.id || '',
        approvals: approvals || [],
        type: dataIlmiah?.type || '',
      },
    });

    onOpenModal();
  };

  const statusBgColor = (value: string) => {
    switch (value) {
      case 'PENDING': {
        return colors.primaryYellow;
      }
      case 'REJECTED': {
        return colors.primaryRed;
      }
      case 'SCIENTIFIC_APPROVED': {
        return colors.primaryPurple;
      }
      case 'GRADUATION_IN_PROGRESS': {
        return colors.primaryGreen;
      }
    }
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      sortable: true,
      width: '65px',
    },
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
      width: '170px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            padding: '10px 0px',
          }}
        >
          {convertUnderscoresToSpaces(row.id)}
        </span>
      ),
    },
    {
      name: 'Tipe Ilmiah',
      selector: (row) => row.type,
      sortable: true,
      wrap: true,
      width: '150px',
      cell: (row) => <span>{convertUnderscoresToSpaces(row.type)}</span>,
    },
    {
      name: 'Judul',
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            padding: '10px',
          }}
        >
          {row.title}
        </span>
      ),
    },
    {
      name: 'Riwayat',
      selector: (row) => row.history,
      sortable: true,
      wrap: true,
      width: '170px',
      cell: (row) => (
        <Flex py={3} flexDirection="column">
          {row.history.replace('RESIDEN', 'Residen')}
          {row.historyLength > 1 && (
            <Text
              fontSize="xs"
              mt={2}
              color={colors.primaryPurple}
              fontWeight="bold"
              _hover={{ cursor: 'pointer' }}
              onClick={() => {
                setSelectedHistory(pengajuanList[row.idx - 1].scientificLogs);
                onOpenSeeMore();
              }}
            >
              See More
            </Text>
          )}
        </Flex>
      ),
    },
    {
      name: 'Daftar Pembimbing',
      selector: (row) => row.approvals,
      sortable: true,
      wrap: true,
      width: '170px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <Flex direction="column" gap={3}>
          {row.status === 'SCIENTIFIC_APPROVED' && (
            <Text>Sudah bisa diajukan kelulusan</Text>
          )}
          <Flex
            fontSize="xs"
            bgColor={statusBgColor(row.status)}
            color={colors.white}
            py={1}
            px={2}
            borderRadius={10}
            onClick={() =>
              handleClickStatus({
                ilmiahId: row.id,
                status: row.status,
              })
            }
            textAlign="center"
            justify="center"
          >
            {row.status === 'SCIENTIFIC_APPROVED'
              ? 'Ajukan Kelulusan'
              : convertUnderscoresToSpaces(row.status)}
          </Flex>
        </Flex>
      ),
    },
  ];

  const data = useMemo(() => {
    return pengajuanList.map((singleIlmiah, idx) => {
      return {
        idx: idx + 1,
        id: singleIlmiah.id,
        type: singleIlmiah.type,
        title: singleIlmiah.title,
        history: `${singleIlmiah.scientificLogs[0]
          ?.changes} - ${convertDateForIlmiah(
          singleIlmiah.scientificLogs[0]?.created,
        )}`,
        approvals: singleIlmiah?.approvals?.map((item) => item.name).join(', '),
        status: singleIlmiah?.scientificStatus,
        historyLength: singleIlmiah.scientificLogs.length,
      };
    });
  }, [pengajuanList]);

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
};

export default TableData;
