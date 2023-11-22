import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { customStyles } from '../../../../constants/tableFormat';
import { Pelanggaran } from '../../hooks/useGetAllPelanggaran/types';
import { Flex } from '@chakra-ui/react';
import { convertDateForExam } from '../../../../helpers';

interface Props {
  pelanggaranList: Pelanggaran[];
}

interface DataRow {
  idx: number;
  residenName: string;
  severityLevel: string;
  title: string;
  description: string;
  violationDate: string;
  createdDate: string;
}

const TableData = ({ pelanggaranList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      width: '50px',
    },
    {
      name: 'Nama Residen',
      selector: (row) => row.residenName,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Severity',
      selector: (row) => row.severityLevel,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Judul Laporan',
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Deskripsi Pelanggaran',
      selector: (row) => row.description,
      wrap: true,
      cell: (row) => (
        <Flex py={4}>
          <p>{row.description}</p>
        </Flex>
      ),
      width: '170px',
    },
    {
      name: 'Tanggal Pelanggaran',
      selector: (row) => row.violationDate,
      sortable: true,
      wrap: true,
      width: '180px',
    },
    {
      name: 'Tanggal Laporan',
      selector: (row) => row.createdDate,
      sortable: true,
      wrap: true,
      width: '180px',
    },
  ];

  const data = useMemo(() => {
    return pelanggaranList?.map((pelanggaran, idx) => {
      return {
        idx: idx + 1,
        residenName: pelanggaran.residenName,
        severityLevel: pelanggaran.severity,
        title: pelanggaran.title,
        description: pelanggaran.description,
        violationDate: convertDateForExam(pelanggaran.violationDate),
        createdDate: 'Waiting BE',
      };
    });
  }, [pelanggaranList]);

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
