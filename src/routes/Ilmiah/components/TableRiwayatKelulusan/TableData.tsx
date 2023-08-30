import DataTable, { TableColumn } from "react-data-table-component";
import { RiwayatKelulusan } from "../../hooks/useGetRiwayatKelulusan/types";
import { useMemo } from "react";
import { convertDateForIlmiah } from "../../../../helpers";
import { colors } from "../../../../constants/colors";
import { Flex } from "@chakra-ui/react";

interface Props {
  riwayatKelulusan: RiwayatKelulusan[];
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

const TableData = ({ riwayatKelulusan }: Props) => {
  const statusBgColor = (value: string) => {
    switch (value) {
      case "PENDING": {
        return colors.primaryYellow;
      }
      case "REJECTED": {
        return colors.primaryRed;
      }
      case "APPROVED": {
        return colors.primaryGreen;
      }
    }
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {row.id.substring(0, 4)}
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
      cell: (row) => (
        <Flex
          bgColor={statusBgColor(row.status)}
          color={colors.white}
          py={1}
          px={2}
          borderRadius={10}
          fontSize="xs"
          textAlign="center"
          justify="center"
        >
          {row.status}
        </Flex>
      ),
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

export default TableData;
