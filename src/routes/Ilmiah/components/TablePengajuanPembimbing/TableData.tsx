import { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { PengajuanPembimbing } from "../../hooks/useGetPengajuanPembimbing/types";
import { convertDateForIlmiah } from "../../../../helpers";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface DataRow {
  id: string;
  type: string;
  title: string;
  history: string;
  approvals: string;
  status: string;
}

interface Props {
  pengajuanList: PengajuanPembimbing[];
  onOpenModal: () => void;
}

const TableData = ({ pengajuanList, onOpenModal }: Props) => {
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
    },
    {
      name: "Judul",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            whiteSpace: "pre-wrap",
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
      width: "30%",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "30%",
      cell: (row) => (
        <Flex
          fontSize="xs"
          bgColor={colors.primaryPurple}
          color={colors.white}
          py={1}
          px={2}
          borderRadius={10}
          onClick={onOpenModal}
        >
          {row.status}
        </Flex>
      ),
    },
  ];

  const data = useMemo(() => {
    return pengajuanList.map((singleIlmiah) => {
      return {
        id: singleIlmiah.id,
        type: singleIlmiah.type,
        title: singleIlmiah.title,
        history: singleIlmiah.scientificLogs
          .map(
            (item) => `${convertDateForIlmiah(item.created)} - ${item.changes}`
          )
          .join("\n"),
        approvals: singleIlmiah.approvals.map((item) => item.name).join("\n"),
        status: singleIlmiah?.scientificStatus,
      };
    });
  }, [pengajuanList]);

  return <DataTable columns={columns} data={data} pagination />;
};

export default TableData;
