import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { Case } from "../../hooks/useGetCases/types";
import { formatDateMonthYear } from "../../../../helpers";
import { useNavigate } from "react-router-dom";

interface Props {
  caseList: Case[];
}

const TableCases = ({ caseList }: Props) => {
  const navigate = useNavigate();

  return (
    <TableContainer maxHeight={300} overflowY="scroll">
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr color={colors.primaryPurple}>
            <Th>ID Case</Th>
            <Th>Tanggal</Th>
            <Th>DPJP</Th>
            <Th>Jenis</Th>
            <Th>Status</Th>
            <Th>Supervising</Th>
          </Tr>
        </Thead>
        <Tbody>
          {caseList?.map((caseData) => {
            return (
              <Tr
                key={`userStase-${caseData.id}`}
                onClick={() => navigate("/cases/details")}
              >
                <Td>{caseData?.id.substring(0, 5)}</Td>
                <Td>{formatDateMonthYear(new Date(caseData?.date))}</Td>
                <Td>{caseData?.dpjpUserName}</Td>
                <Td>{caseData?.caseType}</Td>
                <Td>{caseData?.notes}</Td>
                <Td>{caseData?.supervisees[0]?.userName}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCases;
