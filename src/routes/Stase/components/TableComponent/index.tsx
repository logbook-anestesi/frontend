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

const TableComponent = () => {
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
          <Tr>
            <Td>1</Td>
            <Td>THT</Td>
            <Td>Februari 2023</Td>
            <Td>Lulus</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Mata</Td>
            <Td>Desember 2023</Td>
            <Td>Tidak Lulus</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Obgyn</Td>
            <Td>Maret 2023</Td>
            <Td>Lulus</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Ortho</Td>
            <Td>Januari 2023</Td>
            <Td>Lulus</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>Dharmais</Td>
            <Td>September 2023</Td>
            <Td>Tidak Lulus</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
