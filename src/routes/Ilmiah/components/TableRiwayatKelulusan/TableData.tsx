import DataTable, { TableColumn } from "react-data-table-component";
import { RiwayatKelulusan } from "../../hooks/useGetRiwayatKelulusan/types";
import { Flex, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { convertDateForIlmiah } from "../../../../helpers";

interface Props {
  riwayatKelulusan: RiwayatKelulusan[];
  onOpenModal: () => void;
}

interface DataRow {
  id: string;
  type: string;
  title: string;
  linkDocument: string;
  history: string;
  approvals: string;
  status: string;
}
const TableData = ({ riwayatKelulusan, onOpenModal }: Props) => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {row.id}
        </span>
      ),
    },
    {
      name: "Tipe Ilmiah",
      selector: (row) => row.type,
      sortable: true,
      width: "20%",
    },
    {
      name: "Judul",
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
      width: "20%",
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
            padding: "10px",
          }}
        >
          {row.title}
        </span>
      ),
    },
    {
      name: "Riwayat",
      selector: (row) => row.history,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {row.history}
        </span>
      ),
      width: "30%",
    },
    {
      name: "Daftar Pembimbing",
      selector: (row) => row.approvals,
      sortable: true,
      width: "20%",
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "30%",
    },
  ];

  const data = useMemo(() => {
    return riwayatKelulusan?.map((singleRiwayat) => {
      return {
        id: singleRiwayat.id,
        type: singleRiwayat.scientificType,
        title: singleRiwayat.scientificTitle,
        linkDocument: singleRiwayat.scientificDocumentLink,
        history: singleRiwayat.scientificLogs
          .map(
            (item) => `${convertDateForIlmiah(item.created)} - ${item.changes}`
          )
          .join("\n"),
        approvals: singleRiwayat.approvals.map((item) => item.name).join("\n"),
        status: singleRiwayat?.scientificGraduationStatus,
      };
    });
  }, [riwayatKelulusan]);

  return <DataTable columns={columns} data={data} pagination />;
};
