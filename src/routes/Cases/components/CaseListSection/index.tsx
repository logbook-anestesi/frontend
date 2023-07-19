import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import TableCases from "../TableCases";

const CaseListSection = () => {
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

      <TableCases />
    </Flex>
  );
};

export default CaseListSection;
