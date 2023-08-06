import { Flex, Text } from "@chakra-ui/react";
import TableCases from "../TableCases";
import { CaseMenu } from "../../types";
import { Case } from "../../hooks/useGetCases/types";

interface Props {
  caseList: Case[];
  selectedCase: CaseMenu;
}

const CaseListSection = ({ caseList, selectedCase }: Props) => {
  return (
    <Flex direction="column" mt={5} gap={3}>
      <Text as="b" fontSize="xl" mb={3}>
        Daftar Cases
      </Text>

      {/* temporary hide */}
      {/* <InputGroup mb={3}>
        <Input placeholder="Cari berdasarkan tags/atribut..." />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup> */}

      <TableCases caseList={caseList} selectedCase={selectedCase} />
    </Flex>
  );
};

export default CaseListSection;
