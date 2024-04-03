import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { colors } from '../../../../constants/colors';
import { convertDateForExam } from '../../../../helpers';
import { Badge } from '@chakra-ui/react';

interface DataRow {
  id: string;
  date: string;
  residenName: string;
}

interface Props {
  caseList: {
    id: string;
    date: string;
    residenName: string;
  }[];
}

const TableDataReviewedCase = ({ caseList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'ID Case',
      selector: (row) => row.id,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Tanggal',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Residen',
      selector: (row) => row.residenName,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return caseList?.map((singleCase) => {
      return {
        id: singleCase.id,
        date: singleCase.date,
        residenName: singleCase.residenName,
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

export default TableDataReviewedCase;
