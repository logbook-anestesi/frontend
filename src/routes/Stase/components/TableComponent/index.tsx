import {
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Loading from "./Loading";
import { colors } from "../../../../constants/colors";
import { StaseUser } from "../../hooks/useGetStaseUser/types";
import { formatMonthYear } from "../../../../helpers";

interface Props {
  staseData?: StaseUser[];
  loading: string;
}

const TableComponent = ({ staseData, loading }: Props) => {
  if (loading === "loading") return <Loading />;

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr color={colors.primaryPurple}>
            <Th>No</Th>
            <Th>Nama Stase</Th>
            <Th>Waktu</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {staseData?.map((stase, index) => {
            return (
              <Tr key={`userStase-${index}`}>
                <Td>{index + 1}</Td>
                <Td>{stase?.stationName}</Td>
                <Td>{formatMonthYear(stase?.periodMmYyyy)}</Td>
                <Td>Lulus</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
