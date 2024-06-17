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
import { PainServiceType } from '../../../../hooks/useGetCasesForm/types';
import { useAddCasesContext } from '../../../AddCases/contexts';
import CardTypePainService from './CardTypePainService';
import { colors } from '../../../../constants/colors';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  painServiceTypes: PainServiceType[];
  setTypePainService: Dispatch<SetStateAction<PainServiceType | undefined>>;
  onOpenAddOther: () => void;
}

const ModalTypePainService = ({
  isOpen,
  closeModal,
  painServiceTypes,
  setTypePainService,
  onOpenAddOther,
}: Props) => {
  const { selectedTypePainService } = useAddCasesContext();
  const [filteredTypePain, setFilteredTypePain] = useState(painServiceTypes);

  useEffect(() => {
    const filtered = painServiceTypes.filter(
      (typePainService) =>
        !selectedTypePainService.some(
          (item) => item.title === typePainService?.name,
        ),
    );

    setFilteredTypePain(filtered);
  }, [painServiceTypes, selectedTypePainService]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = painServiceTypes.filter((typePainService) =>
      typePainService.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredTypePain(filtered);
  };

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
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

        <Text
          as="u"
          alignSelf="center"
          fontSize="sm"
          color={colors.primaryPurple}
          mb={5}
          onClick={handleClickAddOther}
          visibility="hidden"
        >
          Tipe tidak ada di daftar
        </Text>

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredTypePain?.map((typePainService) => {
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
