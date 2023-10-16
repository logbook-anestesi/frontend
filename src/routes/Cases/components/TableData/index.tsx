import DataTable, { TableColumn } from 'react-data-table-component';
import { Case } from '../../hooks/useGetCases/types';
import { useMemo } from 'react';
import { formatDateMonthYear } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

interface DataRow {
  idCase: string;
  date: string;
  dpjp: string;
  caseType: string;
  status: string;
  supervising: string;
  idCaseFull: string;
}

interface Props {
  caseList: Case[];
}

const TableData = ({ caseList }: Props) => {
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
      selector: (row) => row.idCase,
      style: {
        textDecoration: 'underline',
        color: '#3498db',
        padding: '10px',
      },
      cell: (row) => (
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            navigate('/cases/details', {
              state: { caseId: row?.idCaseFull },
            })
          }
        >
          {row.idCase}
        </span>
      ),
    },
    {
      name: 'Tanggal',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'DPJP',
      selector: (row) => row.dpjp,
      sortable: true,
    },
    {
      name: 'Jenis',
      selector: (row) => row.caseType,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Badge colorScheme={getColorScheme(row.status)}>{row.status}</Badge>
      ),
    },
    {
      name: 'Supervising',
      selector: (row) => row.supervising,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return caseList.map((singleCase) => {
      console.log('999 INI CASE', singleCase);
      return {
        idCase: `${singleCase?.caseType || ''} - ${singleCase?.id.substring(
          0,
          4,
        )}`,
        idCaseFull: singleCase?.id,
        dpjp: singleCase.dpjpUserName,
        date: formatDateMonthYear(new Date(singleCase?.date)),
        caseType: singleCase.caseType,
        status: singleCase.status,
        supervising: singleCase?.supervisees[0]?.userName,
      };
    });
  }, [caseList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
