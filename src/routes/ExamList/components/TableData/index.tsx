import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
  idx: number;
  examName: string;
}

interface Props {
  examList: string[];
}

const TableData = ({ examList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      sortable: true,
      width: '70px',
    },
    {
      name: 'Exam',
      selector: (row) => row.examName,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return examList?.map((exam, idx) => {
      return {
        idx: idx + 1,
        examName: exam,
      };
    });
  }, [examList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
