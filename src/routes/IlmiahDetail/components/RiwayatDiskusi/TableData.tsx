import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { colors } from '../../../../constants/colors';
import { Flex } from '@chakra-ui/react';
import { Diskusi } from '../../hooks/useGetDetailKelulusan/types';
import {
  convertDateForIlmiah,
  convertDateForNotification,
} from '../../../../helpers';
import { customStyles } from '../../../../constants/tableFormat';

interface Props {
  riwayatDiskusi: Diskusi[];
}

interface DataRow {
  idx: number;
  tanggal: string;
  title: string;
  deskripsi: string;
  approvals: string;
  history: string;
  status: string;
}

const TableData = ({ riwayatDiskusi }: Props) => {
  const statusBgColor = (value: string) => {
    switch (value) {
      case 'PENDING': {
        return colors.primaryYellow;
      }
      case 'REJECTED': {
        return colors.primaryRed;
      }
      case 'APPROVED': {
        return colors.primaryGreen;
      }
    }
  };

  const handleRedirectDocument = (url: string) => {
    window.open(url, '_blank');
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
    },
    {
      name: 'Tanggal',
      selector: (row) => row.tanggal,
      sortable: true,
      cell: (row) => <span>{convertDateForNotification(row?.tanggal)}</span>,
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
      name: 'Deskripsi Diskusi',
      selector: (row) => row.deskripsi,
      width: '170px',
      cell: (row) => (
        <span
          style={{ color: 'blue' }}
          onClick={() => handleRedirectDocument(row.deskripsi)}
        >
          {row.deskripsi}
        </span>
      ),
    },
    {
      name: 'Pembimbing',
      selector: (row) => row.approvals,
      sortable: true,
      width: '170px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {row.approvals}
        </span>
      ),
    },
    {
      name: 'Riwayat',
      selector: (row) => row.history,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {row.history}
        </span>
      ),
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Flex
          bgColor={statusBgColor(row.status)}
          color={colors.white}
          py={1}
          px={2}
          borderRadius={10}
          fontSize="xs"
          textAlign="center"
          justify="center"
        >
          {row.status}
        </Flex>
      ),
    },
  ];

  const data = useMemo(() => {
    return riwayatDiskusi?.map((diskusi, idx) => {
      console.log({ riwayatDiskusi });
      return {
        idx: idx + 1,
        tanggal: diskusi.discussionDate,
        title: diskusi.title,
        deskripsi: diskusi.description,
        approvals: diskusi.approvalUserName,
        history: diskusi.scientificLogs
          .map(
            (item) => `${convertDateForIlmiah(item.created)} - ${item.changes}`,
          )
          .join('\n'),
        status: diskusi.status,
        key: `diskusi-${idx}`,
      };
    });
  }, [riwayatDiskusi]);

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
