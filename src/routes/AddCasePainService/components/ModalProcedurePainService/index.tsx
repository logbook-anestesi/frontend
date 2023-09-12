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
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Search2Icon } from '@chakra-ui/icons';

import { useAddCasesContext } from '../../../AddCases/contexts';
import CardTypePainService from './CardProcedurePainService';
import {
  PainServiceProcedure,
  PainServiceType,
} from '../../../../hooks/useGetCasesForm/types';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  procedurePainService: PainServiceProcedure[];
  setProcedurePainService: Dispatch<
    SetStateAction<PainServiceType | undefined>
  >;
}

const ModalProcedurePainService = ({
  isOpen,
  closeModal,
  procedurePainService,
  setProcedurePainService,
}: Props) => {
  const { selectedProcedurePainService } = useAddCasesContext();
  const [filteredProcedurePain, setFilteredProcedurePain] =
    useState(procedurePainService);

  useEffect(() => {
    const filtered = procedurePainService.filter(
      (procedurePainService) =>
        !selectedProcedurePainService.some(
          (item) => item.title === procedurePainService?.name,
        ),
    );

    setFilteredProcedurePain(filtered);
  }, [procedurePainService, selectedProcedurePainService]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = procedurePainService.filter((procedurePainService) =>
      procedurePainService.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredProcedurePain(filtered);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Procedure Pain Service</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari procedure pain service ..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredProcedurePain?.map((procedurePainService) => {
            return (
              <CardTypePainService
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
