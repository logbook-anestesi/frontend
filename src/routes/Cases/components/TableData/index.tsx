import DataTable, { TableColumn } from "react-data-table-component";
import { Case } from "../../hooks/useGetCases/types";
import { useMemo } from "react";
import { formatDateMonthYear } from "../../../../helpers";

interface DataRow {
  idCase: string;
  date: string;
  dpjp: string;
  caseType: string;
  status: string;
  supervising: string;
}

interface Props {
  caseList: Case[];
}

const TableData = ({ caseList }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: "ID Case",
      selector: (row) => row.idCase,
      style: {
        textDecoration: "underline",
        color: "#3498db",
      },
    },
    {
      name: "Tanggal",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "DPJP",
      selector: (row) => row.dpjp,
      sortable: true,
    },
    {
      name: "Jenis",
      selector: (row) => row.caseType,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Supervising",
      selector: (row) => row.supervising,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return caseList.map((singleCase) => {
      return {
        idCase: `${singleCase?.caseType || ""} - ${singleCase?.id.substring(
          0,
          4
        )}`,
        dpjp: singleCase.dpjpUserName,
        date: formatDateMonthYear(new Date(singleCase?.date)),
        caseType: singleCase.caseType,
        status: singleCase.notes,
        supervising: singleCase?.supervisees[0]?.userName,
      };
    });
  }, [caseList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
