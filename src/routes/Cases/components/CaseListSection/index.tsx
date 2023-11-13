import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { CaseMenu } from '../../types';
import { Case } from '../../hooks/useGetCases/types';
import TableData from '../TableData';
import filterIcon from '../../assets/filter.png';
import ModalFilter from '../ModalFilter';
import { colors } from '../../../../constants/colors';
import { useState } from 'react';

interface Props {
  caseList: Case[] | undefined;
  selectedCase: CaseMenu;
  setFinalCaseList: React.Dispatch<React.SetStateAction<Case[] | undefined>>;
  handleResetData: () => void;
}

const CaseListSection = ({
  caseList,
  selectedCase,
  setFinalCaseList,
  handleResetData,
}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showResetFilter, setResetShowFilter] = useState(false);

  const handleResetFilter = () => {
    setResetShowFilter(false);
    handleResetData();
  };

  return (
    <Flex direction="column" mt={5} gap={3}>
      <Flex justify="space-between" align="center" alignItems="center">
        {selectedCase.value === '-' ? (
          <Text as="b" fontSize="xl">
            Daftar Seluruh Kasus
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

      {showResetFilter && (
        <Flex justify="end">
          <Text
            fontSize="sm"
            align="center"
            bgColor={colors.lightPurple}
            color="white"
            w="100px"
            rounded="xl"
            onClick={handleResetFilter}
          >
            Reset Filter
          </Text>
        </Flex>
      )}

      <TableData caseList={caseList} />

      <ModalFilter
        closeModal={onClose}
        handleSubmit={async () => {}}
        isOpen={isOpen}
        setFinalCaseList={setFinalCaseList}
        setResetShowFilter={setResetShowFilter}
      />
    </Flex>
  );
};

export default CaseListSection;
