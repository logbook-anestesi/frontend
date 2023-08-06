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
import { useEffect, useState } from "react";
import { CaseMenu } from "../../types";

interface Props {
  caseList: Case[];
  selectedCase: CaseMenu;
}

const TableCases = ({ caseList, selectedCase }: Props) => {
  const navigate = useNavigate();
  const [finalData, setFinalData] = useState<Case[]>(caseList);

  useEffect(() => {
    if (selectedCase?.value === "-") {
      return;
    }

    const filteredData = caseList?.filter(
      (caseData) => caseData.caseType === selectedCase.value
    );

    setFinalData(filteredData);
  }, [caseList, selectedCase]);

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
          {finalData?.map((caseData) => {
            return (
              <Tr key={`userStase-${caseData.id}`}>
                <Td
                  textDecoration="underline"
                  color="#3498db"
                  onClick={() =>
                    navigate("/cases/details", {
                      state: { caseId: caseData?.id },
                    })
                  }
                >
                  {caseData?.id.substring(0, 5)}
                </Td>
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
