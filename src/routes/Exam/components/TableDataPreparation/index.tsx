import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { colors } from '../../../../constants/colors';
import { convertDateForExam } from '../../../../helpers';
import { Badge } from '@chakra-ui/react';
import { ExamPreparation } from '../../hooks/useGetAllExamPreparation/types';

interface DataRow {
  idx: number;
  type: string;
  approvalDate: string;
  accessor: string;
  status: string;
  createdDate: string;
}

interface Props {
  examPrepList: ExamPreparation[];
}

const TableDataPreparation = ({ examPrepList }: Props) => {
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
      name: 'Tanggal Pembuatan',
      selector: (row) => row.createdDate,
      sortable: true,
      wrap: true,
      width: '170px',
    },
    {
      name: 'Tipe',
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: 'Penguji',
      selector: (row) => row.accessor,
      sortable: true,
      wrap: true,
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
    return examPrepList
      ?.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime(),
      )
      ?.map((exam, idx) => {
        return {
          idx: idx + 1,
          type: exam.type,
          accessor: exam.assessorName,
          approvalDate:
            exam.approvalStatus === 'PENDING'
              ? '-'
              : convertDateForExam(exam.approvalConfirmDate),
          status: exam.approvalStatus,
          createdDate: convertDateForExam(exam.createdDate),
        };
      });
  }, [examPrepList]);

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

export default TableDataPreparation;
