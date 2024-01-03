import DataTable, { TableColumn } from 'react-data-table-component';
import { CaseProgressElement } from '../../hooks/useGetCaseProgress/types';
import { useMemo } from 'react';
import { colors } from '../../../../constants/colors';

interface DataRow {
  id: string;
  targetKolegium: string;
  targetProdi: string;
  accomplished: string;
  pKolegium: string;
  pProdi: string;
  elementName: string;
}

interface Props {
  caseProgressList: CaseProgressElement[];
}

const TableData = ({ caseProgressList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Nomor Elemen',
      selector: (row) => row.id,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.id}
        </span>
      ),
    },
    {
      name: 'Kasus/Tindakan',
      selector: (row) => row.elementName,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.elementName}
        </span>
      ),
    },
    {
      name: 'Target Kolegium',
      selector: (row) => row.targetKolegium,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.targetKolegium}
        </span>
      ),
    },
    {
      name: 'Target Prodi',
      selector: (row) => row.targetProdi,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.targetProdi}
        </span>
      ),
    },
    {
      name: '% Kolegium',
      selector: (row) => row.pKolegium,
      sortable: true,
      width: '150px',
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.pKolegium}
        </span>
      ),
    },
    {
      name: '% Prodi',
      selector: (row) => row.pProdi,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: 'normal',
            padding: '10px 0px',
          }}
        >
          {row.pProdi}
        </span>
      ),
    },
  ];

  const data = useMemo(() => {
    return caseProgressList.map((it) => {
      return {
        id: it.id,
        targetKolegium: it.targetKolegium,
        targetProdi: it.targetProdi,
        accomplished: it.accomplished,
        pKolegium:
          it.pKolegium == 'NaN' || it.pKolegium == 'Infinity'
            ? '-'
            : it.pKolegium + '%',
        pProdi:
          it.pProdi == 'NaN' || it.pProdi == 'Infinity' ? '-' : it.pProdi + '%',
        elementName: it.elementName,
      };
    });
  }, [caseProgressList]);

  const customStyles = {
    headCells: {
      style: {
        color: colors.primaryPurple,
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {},
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
    />
  );
};

export default TableData;
