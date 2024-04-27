import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { colors } from '../../../../constants/colors';
import { Case } from '../../../Cases/hooks/useGetCases/types';
import { convertDateForIlmiah } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

interface DataRow {
  id: string;
  date: string;
  dpjpName: string;
  type: string;
  status: string;
}

interface Props {
  caseList: Case[];
}

const TableDataReviewedCase = ({ caseList }: Props) => {
  const navigate = useNavigate();

  const getColorScheme = (type: string) => {
    if (type === 'APPROVED') {
      return 'green';
    }
    if (type === 'REJECTED') {
      return 'red';
    }
    if (type === 'PENDING') {
      return 'purple';
    }
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'ID Case',
      selector: (row) => row.id,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <span
          style={{
            textDecoration: 'underline',
            color: colors.primaryPurple,
            cursor: 'pointer',
          }}
          onClick={() =>
            navigate('/cases/details', {
              state: { caseId: row?.id },
            })
          }
        >
          {row.id.substring(0, 4)}
        </span>
      ),
    },
    {
      name: 'Tanggal',
      selector: (row) => row.date,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'DPJP',
      selector: (row) => row.dpjpName,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Jenis',
      selector: (row) => row.type,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Badge colorScheme={getColorScheme(row.status)}>{row.status}</Badge>
      ),
    },
  ];

  const data = useMemo(() => {
    return caseList?.map((singleCase) => {
      return {
        id: singleCase.id,
        date: convertDateForIlmiah(singleCase.date),
        dpjpName: singleCase.dpjpUserName,
        type: singleCase.caseType,
        status: singleCase.status,
      };
    });
  }, [caseList]);

  const customStyles = {
    headCells: {
      style: {
        color: colors.primaryPurple,
        fontWeight: 'bold',
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
};

export default TableDataReviewedCase;
