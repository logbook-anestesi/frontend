import { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { colors } from "../../../../constants/colors";
import { Flex } from "@chakra-ui/react";
import { Diskusi } from "../../hooks/useGetDetailKelulusan/types";
import { convertDateForIlmiah } from "../../../../helpers";

interface Props {
  riwayatDiskusi: Diskusi[];
}

interface DataRow {
  tanggal: string;
  title: string;
  deskripsi: string;
  approvals: string;
  history: string;
  status: string;
}

const TableData = ({ riwayatDiskusi }: Props) => {
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

  const handleRedirectDocument = (url: string) => {
    window.open(url, "_blank");
  };

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
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
      name: "Deskripsi Diskusi",
      selector: (row) => row.deskripsi,
      cell: (row) => (
        <span
          style={{ color: "blue" }}
          onClick={() => handleRedirectDocument(row.deskripsi)}
        >
          {row.deskripsi}
        </span>
      ),
    },
    {
      name: "Pembimbing",
      selector: (row) => row.approvals,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {row.approvals}
        </span>
      ),
      width: "30%",
    },
    {
      name: "Riwayat",
      selector: (row) => row.history,
      sortable: true,
      width: "20%",
      wrap: true,
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
    return riwayatDiskusi?.map((diskusi) => {
      return {
        tanggal: diskusi.discussionDate,
        title: diskusi.title,
        deskripsi: diskusi.description,
        approvals: diskusi.approvalUserName,
        history: diskusi.scientificLogs
          .map(
            (item) => `${convertDateForIlmiah(item.created)} - ${item.changes}`
          )
          .join("\n"),
        status: diskusi.status,
      };
    });
  }, [riwayatDiskusi]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
