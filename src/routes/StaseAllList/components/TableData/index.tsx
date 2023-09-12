import DataTable, { TableColumn } from 'react-data-table-component';
import { useMemo } from 'react';
import { Stase } from '../../hooks/useGetAllStase/types';

interface DataRow {
  index: number;
  stationName: string;
  leaderName: string;
}

interface Props {
  stationList: Stase[];
  loading: boolean;
}

const TableData = ({ stationList, loading }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Nomor',
      selector: (row) => row.index,
      sortable: true,
      maxWidth: '5px',
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

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
