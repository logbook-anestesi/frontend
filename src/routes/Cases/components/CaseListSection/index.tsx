import { Flex, Text } from '@chakra-ui/react';
import { CaseMenu } from '../../types';
import { Case } from '../../hooks/useGetCases/types';
import TableData from '../TableData';

interface Props {
  caseList: Case[];
  selectedCase: CaseMenu;
}

const CaseListSection = ({ caseList, selectedCase }: Props) => {
  return (
    <Flex direction="column" mt={5} gap={3}>
      {selectedCase.value === '-' ? (
        <Text as="b" fontSize="xl" mb={3}>
          Daftar Seluruh Cases
        </Text>
      ) : (
        <Text as="b" fontSize="xl" mb={3}>
          Daftar Cases {selectedCase.title}
        </Text>
      )}

      {/* temporary hide */}
      {/* <InputGroup mb={3}>
        <Input placeholder="Cari berdasarkan tags/atribut..." />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup> */}

      <TableData caseList={caseList} />
    </Flex>
  );
};

export default CaseListSection;
