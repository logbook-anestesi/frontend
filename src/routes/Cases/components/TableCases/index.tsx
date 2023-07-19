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
import { DUMMY_CASES } from "../../../../constants/dummyCase";

const TableCases = () => {
  return (
    <TableContainer>
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
          {DUMMY_CASES?.map((caseData) => {
            return (
              <Tr key={`userStase-${caseData.id}`}>
                <Td>{caseData.id}</Td>
                <Td>{caseData.date}</Td>
                <Td>{caseData.dpjp}</Td>
                <Td>{caseData.type}</Td>
                <Td>{caseData.status}</Td>
                <Td>{caseData.supervising}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCases;
