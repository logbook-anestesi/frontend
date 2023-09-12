import DataTable, { TableColumn } from 'react-data-table-component';
import { useMemo } from 'react';
import { formatMonthYear } from '../../../../helpers';
import { StaseUser } from '../../hooks/useGetStaseUser/types';

interface DataRow {
  index: number;
  stationName: string;
  date: string;
  status: string;
}

interface Props {
  stationList: StaseUser[];
  loading: boolean;
}

const TableData = ({ stationList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.index,
      sortable: true,
      maxWidth: '2px',
    },
    {
      name: 'Nama',
      selector: (row) => row.stationName,
      sortable: true,
    },
    {
      name: 'Tanggal',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return stationList.map((singleStation, idx) => {
      return {
        index: idx + 1,
        stationName: singleStation.stationName,
        date: formatMonthYear(singleStation.periodMmYyyy),
        status: 'Lulus',
      };
    });
  }, [stationList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
