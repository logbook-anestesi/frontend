import DataTable, { TableColumn } from 'react-data-table-component';
import { useMemo } from 'react';
import { formatMonthYear } from '../../../../helpers';
import { StaseUser } from '../../hooks/useGetStaseUser/types';
import { colors } from '../../../../constants/colors';

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
  const normalizeStatus = (status: string) => {
    if (status === 'IN_PROGRESS') {
      return 'In Progress';
    }
    if (status === 'PASSED') {
      return 'Lulus';
    }
    if (status === 'FAILED') {
      return 'Tidak Lulus';
    }

    return '-';
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.index,
      sortable: true,
      width: '65px',
    },
    {
      name: 'Nama',
      selector: (row) => row.stationName,
      sortable: true,
      width: '',
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
        status: normalizeStatus(singleStation.status),
      };
    });
  }, [stationList]);

  const customStyles = {
    headCells: {
      style: {
        color: colors.primaryPurple,
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        minHeight: '72px',
        width: '500px',
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
