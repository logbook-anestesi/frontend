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
  Text,
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
import { colors } from '../../../../constants/colors';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  procedurePainService: PainServiceProcedure[];
  setProcedurePainService: Dispatch<
    SetStateAction<PainServiceType | undefined>
  >;
  onOpenAddOther: () => void;
}

const ModalProcedurePainService = ({
  isOpen,
  closeModal,
  procedurePainService,
  setProcedurePainService,
  onOpenAddOther,
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

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Prosedur Manajemen Nyeri</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari prosedur manajemen nyeri ..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Text
          as="u"
          alignSelf="center"
          fontSize="sm"
          color={colors.primaryPurple}
          mb={5}
          onClick={handleClickAddOther}
          visibility="hidden"
        >
          Prosedur tidak ada di daftar
        </Text>

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
