import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import TopNavbar from './components/TopNavBar';
import useGetStaseApprovalList from './hooks/useGetStaseApprovalList';
import { Search2Icon } from '@chakra-ui/icons';
import ListItemStaseApproval from './components/ListItemStaseApproval';
import ModalApprove from './components/ModalApprove';

const StaseApproval = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { approvalList } = useGetStaseApprovalList();
  const [selectedStaseId, setSelectedStaseId] = useState('');
  const [status, setStatus] = useState<'APPROVED' | 'REJECTED'>();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex flexDirection="column">
      <Header title="Modul ..." pathBack="/" />
      <Flex padding="30px" direction="column" gap="16px">
        <TopNavbar
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />

        <Flex direction="column" gap={2}>
          <Text fontSize="xl" as="b">
            Daftar Residen
          </Text>

          <InputGroup>
            <Input placeholder="Cari residen" />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>

          <ListItemStaseApproval
            approvalList={approvalList || []}
            setSelectedStaseId={setSelectedStaseId}
            onOpenModal={onOpen}
            setStatus={setStatus}
          />
        </Flex>
      </Flex>

      {/* Modal Section */}
      <ModalApprove
        closeModal={onClose}
        isOpen={isOpen}
        staseId={selectedStaseId}
        status={status || 'APPROVED'}
      />
    </Flex>
  );
};

export default StaseApproval;
