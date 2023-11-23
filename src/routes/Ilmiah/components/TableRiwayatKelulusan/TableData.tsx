import DataTable, { TableColumn } from 'react-data-table-component';
import { RiwayatKelulusan } from '../../hooks/useGetRiwayatKelulusan/types';
import { useMemo } from 'react';
import {
  convertDateForIlmiah,
  convertUnderscoresToSpaces,
} from '../../../../helpers';
import { colors } from '../../../../constants/colors';
import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { customStyles } from '../../../../constants/tableFormat';

interface Props {
  riwayatKelulusan: RiwayatKelulusan[];
}

interface DataRow {
  idx: number;
  id: string;
  type: string;
  title: string;
  linkDocument: string;
  history: string;
  approvals: string;
  status: string;
}

const TableData = ({ riwayatKelulusan }: Props) => {
  const navigate = useNavigate();

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

  const handleRedirectDetail = (id: string) => {
    navigate('/ilmiah/details', {
      state: {
        ilmiahId: id,
      },
    });
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
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            paddingTop: '10px',
            paddingBottom: '10px',
            color: 'blue',
          }}
          onClick={() => handleRedirectDetail(row.id)}
        >
          {row.id.substring(0, 4)}
        </span>
      ),
    },
    {
      name: 'Tipe Ilmiah',
      selector: (row) => row.type,
      sortable: true,
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
      name: 'Link Dokumen',
      selector: (row) => row.linkDocument,
      wrap: true,
      width: '170px',
      cell: (row) => (
        <span
          style={{ color: 'blue' }}
          onClick={() => handleRedirectDocument(row.linkDocument)}
        >
          {row.linkDocument}
        </span>
      ),
    },
    {
      name: 'Riwayat',
      selector: (row) => row.history,
      sortable: true,
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
          {convertUnderscoresToSpaces(row.status)}
        </Flex>
      ),
    },
  ];

  const data = useMemo(() => {
    return riwayatKelulusan?.map((singleRiwayat, idx) => {
      return {
        idx: idx + 1,
        id: singleRiwayat.id,
        type: singleRiwayat.scientificType,
        title: singleRiwayat.scientificTitle,
        linkDocument: singleRiwayat.scientificDocumentLink,
        history: singleRiwayat.scientificLogs
          .map(
            (item) => `${convertDateForIlmiah(item.created)} - ${item.changes}`,
          )
          .join('\n'),
        approvals: singleRiwayat.approvals.map((item) => item.name).join(','),
        status: singleRiwayat?.scientificGraduationStatus,
      };
    });
  }, [riwayatKelulusan]);

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
