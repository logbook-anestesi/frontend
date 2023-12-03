import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { PainServiceType } from '../../../../hooks/useGetCasesForm/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { useApprovalEditContext } from '../../contexts';
import CardTypePainService from './CardTypePainService';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  typePainServiceList: PainServiceType[];
  setTypePainService: Dispatch<SetStateAction<PainServiceType | undefined>>;
}

const ModalTypePainService = ({
  isOpen,
  closeModal,
  typePainServiceList,
  setTypePainService,
}: Props) => {
  const { selectedTypePainService } = useApprovalEditContext();
  const [filteredTypePainService, setFilteredTypePainService] =
    useState(typePainServiceList);

  useEffect(() => {
    const filtered = typePainServiceList.filter(
      (typePainService) =>
        !selectedTypePainService.some(
          (item) => item.title === typePainService?.name,
        ),
    );

    setFilteredTypePainService(filtered);
  }, [typePainServiceList, selectedTypePainService]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = typePainServiceList.filter((typePainService) =>
      typePainService.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredTypePainService(filtered);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih tipe manajemen nyeri</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari tipe manajemen nyeri ..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredTypePainService?.map((typePainService) => {
            return (
              <CardTypePainService
                key={typePainService.id}
                closeModal={closeModal}
                setTypePainService={setTypePainService}
                typePainService={typePainService}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalTypePainService;
