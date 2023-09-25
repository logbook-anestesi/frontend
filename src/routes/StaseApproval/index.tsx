import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import { ChangeEvent, useEffect, useState } from 'react';
import TopNavbar from './components/TopNavBar';
import useGetStaseApprovalList from './hooks/useGetStaseApprovalList';
import { Search2Icon } from '@chakra-ui/icons';
import ListItemStaseApproval from './components/ListItemStaseApproval';
import ModalApprove from './components/ModalApprove';
import { StaseApproval as StaseApprovalType } from './hooks/useGetStaseApprovalList/types';
import ModalApproveAll from './components/ModalApproveAll';

const StaseApproval = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedStaseId, setSelectedStaseId] = useState('');
  const [filterName, setFilterName] = useState('');
  const [status, setStatus] = useState<'APPROVED' | 'REJECTED'>();
  const [statusBulk, setStatusBulk] = useState<'PASSED' | 'FAILED'>('PASSED');
  const [finalApprovalData, setFinalApprovalData] =
    useState<StaseApprovalType[]>();

  const { approvalList } = useGetStaseApprovalList();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAll,
    onClose: onCloseAll,
    onOpen: onOpenAll,
  } = useDisclosure();

  const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) =>
    setFilterName(event.target.value);

  useEffect(() => {
    if (filterName === '') {
      setFinalApprovalData(approvalList);
      return;
    }

    const filteredItem = approvalList?.filter((approval) =>
      approval.userName.toLowerCase().includes(filterName.toLowerCase()),
    );

    setFinalApprovalData(filteredItem);
  }, [filterName, approvalList]);

  return (
    <Flex flexDirection="column">
      <Header title="Modul ..." pathBack="/" />
      <Flex padding="30px" direction="column" gap="16px">
        {/* <TopNavbar
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        /> */}

        <Flex direction="column" gap={2}>
          <Text fontSize="xl" as="b">
            Daftar Residen
          </Text>

          <InputGroup>
            <Input
              placeholder="Cari residen"
              onChange={handleChangeFilterName}
            />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>

          <ListItemStaseApproval
            approvalList={finalApprovalData || []}
            setSelectedStaseId={setSelectedStaseId}
            onOpenModal={onOpen}
            setStatus={setStatus}
            setStatusBulk={setStatusBulk}
            onOpenModalAll={onOpenAll}
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

      <ModalApproveAll
        closeModal={onCloseAll}
        isOpen={isOpenAll}
        typeBulk={statusBulk}
      />
    </Flex>
  );
};

export default StaseApproval;
