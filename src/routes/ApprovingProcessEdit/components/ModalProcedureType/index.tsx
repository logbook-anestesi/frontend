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
import { ProcedureType } from '../../../../hooks/useGetCasesForm/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { colors } from '../../../../constants/colors';
import CardProcedureType from './CardProcedureType';
import { useApprovalEditContext } from '../../contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  procedureList: ProcedureType[];
  setProcedure: Dispatch<SetStateAction<ProcedureType | undefined>>;
  onOpenAddOther: () => void;
}

const ModalProcedureType = ({
  isOpen,
  closeModal,
  onOpenAddOther,
  procedureList,
  setProcedure,
}: Props) => {
  const { selectedProcedure } = useApprovalEditContext();
  const [filteredProcedure, setFilteredProcedure] = useState(procedureList);

  useEffect(() => {
    const filtered = procedureList.filter(
      (procedure) =>
        !selectedProcedure.some((item) => item.title === procedure?.name),
    );

    setFilteredProcedure(filtered);
  }, [procedureList, selectedProcedure]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = procedureList.filter((procedure) =>
      procedure.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredProcedure(filtered);
  };

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih prosedur</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari nama prosedur ..."
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
        >
          Prosedur tidak ada di daftar
        </Text>

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredProcedure?.map((procedure) => {
            return (
              <CardProcedureType
                key={procedure.id}
                closeModal={closeModal}
                setProcedure={setProcedure}
                procedure={procedure}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalProcedureType;
