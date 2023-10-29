import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Exam } from '../../hooks/useGetAllExam/types';
import { colors } from '../../../../constants/colors';
import { convertDateForExam } from '../../../../helpers';
import { Badge } from '@chakra-ui/react';

interface DataRow {
  idx: number;
  type: string;
  examinerName: string;
  isTheory: boolean;
  approvalDate: string;
  status: string;
}

interface Props {
  examList: Exam[];
}

const TableData = ({ examList }: Props) => {
  const getTickerType = (status: string) => {
    if (status === 'APPROVED') {
      return 'green';
    }
    if (status === 'PENDING') {
      return 'purple';
    }
    if (status === 'REJECTED') {
      return 'red';
    }

    return '';
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      sortable: true,
      width: '65px',
    },
    {
      name: 'Exam',
      selector: (row) => row.type,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Tipe',
      selector: (row) => row.isTheory,
      sortable: true,
      cell: (row) => <span>{row.isTheory ? 'Teori' : 'Praktik'}</span>,
    },
    {
      name: 'Penguji',
      selector: (row) => row.examinerName,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Badge colorScheme={getTickerType(row.status)}>{row.status}</Badge>
      ),
    },
    {
      name: 'Approval Date',
      selector: (row) => row.approvalDate,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return examList?.map((exam, idx) => {
      return {
        idx: idx + 1,
        type: exam.type,
        isTheory: exam.isTheory,
        examinerName: exam.examinerName,
        approvalDate: convertDateForExam(exam.approvalConfirmDate),
        status: exam.approvalStatus,
      };
    });
  }, [examList]);

  const customStyles = {
    headCells: {
      style: {
        color: colors.primaryPurple,
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        width: '800px',
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

export default TableData;
