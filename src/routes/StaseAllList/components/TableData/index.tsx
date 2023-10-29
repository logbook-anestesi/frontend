import DataTable, { TableColumn } from 'react-data-table-component';
import { useMemo } from 'react';
import { Stase } from '../../hooks/useGetAllStase/types';
import { customStyles } from '../../../../constants/tableFormat';

interface DataRow {
  index: number;
  stationName: string;
  leaderName: string;
}

interface Props {
  stationList: Stase[];
  loading: boolean;
}

const TableData = ({ stationList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.index,
      sortable: true,
      width: '70px',
    },
    {
      name: 'Nama Stase',
      selector: (row) => row.stationName,
      sortable: true,
    },
    {
      name: 'Ketua Modul',
      selector: (row) => row.leaderName,
      sortable: true,
      style: {},
    },
  ];

  const data = useMemo(() => {
    return stationList.map((singleStation, idx) => {
      return {
        index: idx + 1,
        stationName: singleStation.stationName,
        leaderName: singleStation.leaderName,
      };
    });
  }, [stationList]);

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
