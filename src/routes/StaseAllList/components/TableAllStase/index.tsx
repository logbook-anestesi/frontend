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
import { Stase } from "../../hooks/useGetAllStase/types";
import LoaderCircle from "../../../../components/LoaderCircle";

interface Props {
  staseList?: Stase[];
  loading: boolean;
}

const TableAllStase = ({ staseList, loading }: Props) => {
  if (loading) {
    return <LoaderCircle />;
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr color={colors.primaryPurple}>
            <Th>No</Th>
            <Th>Nama Stase</Th>
            <Th>Ketua Modul</Th>
          </Tr>
        </Thead>
        <Tbody>
          {staseList?.map((stase, index) => {
            return (
              <Tr key={`userStase-${index}`}>
                <Td>{index + 1}</Td>
                <Td>{stase?.stationName}</Td>
                <Td>{stase?.leaderName}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableAllStase;
