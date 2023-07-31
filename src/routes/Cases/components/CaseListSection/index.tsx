import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import TableCases from "../TableCases";
import { Case } from "../../hooks/useGetCases/types";

interface Props {
  caseList: Case[];
}

const CaseListSection = ({ caseList }: Props) => {
  return (
    <Flex direction="column" mt={5} gap={3}>
      <Text as="b" fontSize="xl">
        Daftar Cases
      </Text>

      <InputGroup mb={3}>
        <Input placeholder="Cari berdasarkan tags/atribut..." />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup>

      <TableCases caseList={caseList} />
    </Flex>
  );
};

export default CaseListSection;
