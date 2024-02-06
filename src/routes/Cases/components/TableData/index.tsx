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
  idCaseFull: string;
}

interface Props {
  caseList: Case[] | undefined;
}

const TableData = ({ caseList }: Props) => {
  const navigate = useNavigate();

  const translateCaseNameIndonesia = (input: string) => {
    if (input == 'PAIN_SERVICE') return 'MANAJEMEN NYERI';
    if (input == 'PROCEDURE_CONSULTATION') return 'KONSUL PROSEDUR';
    if (input == 'POLI_PERIOPERATIVE') return 'POLI PERIOPERATIVE';

    return input;
  };

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
      width: '160px',
      cell: (row) => <span>{translateCaseNameIndonesia(row.caseType)}</span>,
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
        idCase: `${singleCase?.caseType || ''} - ${singleCase?.id.substring(
          0,
          4,
        )}`,
        idCaseFull: singleCase?.id,
        dpjp: singleCase.dpjpUserName,
        date: formatDateMonthYear(new Date(singleCase?.date)),
        caseType: singleCase.caseType,
        status: singleCase.status,
      };
    });
  }, [caseList]);

  return <DataTable columns={columns} data={data || []} pagination />;
};

export default TableData;
