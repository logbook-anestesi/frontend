import DataTable, { TableColumn } from 'react-data-table-component';
import { CaseProgressElement } from '../../hooks/useGetCaseProgress/types';
import { useMemo } from 'react';
import { formatDateMonthYear } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

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
  const navigate = useNavigate();

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Nomor Elemen',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Kasus/Tindakan',
      selector: (row) => row.elementName,
      sortable: true,
    },
    {
      name: 'Target Kolegium',
      selector: (row) => row.targetKolegium,
      sortable: true,
    },
    {
      name: 'Target Prodi',
      selector: (row) => row.targetProdi,
      sortable: true,
    },
    {
      name: 'Progress Target Kolegium',
      selector: (row) => row.pKolegium,
      sortable: true,
    },
    {
      name: 'Progress Target Prodi',
      selector: (row) => row.pProdi,
      sortable: true,
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

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
