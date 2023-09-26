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
import { PainServiceProcedure } from '../../../../hooks/useGetCasesForm/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { useApprovalEditContext } from '../../contexts';
import CardProcedurePainService from './CardProcedurePainService';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  procedurePainServiceList: PainServiceProcedure[];
  setProcedurePainService: Dispatch<
    SetStateAction<PainServiceProcedure | undefined>
  >;
}

const ModalProcedurePainService = ({
  isOpen,
  closeModal,
  procedurePainServiceList,
  setProcedurePainService,
}: Props) => {
  const { selectedProcedurePainService } = useApprovalEditContext();
  const [filteredProcedurePainService, setFilteredProcedurePainService] =
    useState(procedurePainServiceList);

  useEffect(() => {
    const filtered = procedurePainServiceList.filter(
      (procedurePainService) =>
        !selectedProcedurePainService.some(
          (item) => item.title === procedurePainService?.name,
        ),
    );

    setFilteredProcedurePainService(filtered);
  }, [procedurePainServiceList, selectedProcedurePainService]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = procedurePainServiceList.filter((procedurePainService) =>
      procedurePainService.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredProcedurePainService(filtered);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Tipe Pain Service</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari nama tipe pain service ..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredProcedurePainService?.map((procedurePainService) => {
            return (
              <CardProcedurePainService
                key={procedurePainService.id}
                closeModal={closeModal}
                setProcedurePainService={setProcedurePainService}
                procedurePainService={procedurePainService}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalProcedurePainService;
