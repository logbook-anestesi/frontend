import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { CaseMenu } from '../../types';
import { Case } from '../../hooks/useGetCases/types';
import TableData from '../TableData';
import filterIcon from '../../assets/filter.png';
import ModalFilter from '../ModalFilter';

interface Props {
  caseList: Case[];
  selectedCase: CaseMenu;
}

const CaseListSection = ({ caseList, selectedCase }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column" mt={5} gap={3}>
      <Flex justify="space-between" align="center" alignItems="center" mb={3}>
        {selectedCase.value === '-' ? (
          <Text as="b" fontSize="xl">
            Daftar Seluruh Cases
          </Text>
        ) : (
          <Text as="b" fontSize="xl" mb={3}>
            Daftar Cases {selectedCase.title}
          </Text>
        )}

        <Flex align="center" gap={2} onClick={onOpen}>
          <Image src={filterIcon} w={3} h={3} />
          <Text fontSize="sm">Filter</Text>
        </Flex>
      </Flex>

      {/* temporary hide */}
      {/* <InputGroup mb={3}>
        <Input placeholder="Cari berdasarkan tags/atribut..." />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup> */}

      <TableData caseList={caseList} />
      <ModalFilter
        closeModal={onClose}
        handleSubmit={async () => {}}
        isOpen={isOpen}
      />
    </Flex>
  );
};

export default CaseListSection;
