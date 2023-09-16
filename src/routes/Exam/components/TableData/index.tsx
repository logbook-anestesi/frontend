import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Exam } from '../../hooks/useGetAllExam/types';

interface DataRow {
  idx: number;
  type: string;
  examinerName: string;
  isTheory: boolean;
}

interface Props {
  examList: Exam[];
}

const TableData = ({ examList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      sortable: true,
    },
    {
      name: 'Exam',
      selector: (row) => row.type,
      sortable: true,
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
  ];

  const data = useMemo(() => {
    return examList?.map((exam, idx) => {
      return {
        idx: idx + 1,
        type: exam.type,
        isTheory: exam.isTheory,
        examinerName: exam.examinerName,
      };
    });
  }, [examList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
