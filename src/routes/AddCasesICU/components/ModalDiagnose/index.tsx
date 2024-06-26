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
import { Diagnose } from '../../../../hooks/useGetCasesForm/types';
import CardDiagnose from './CardDiagnose';
import { useAddCasesContext } from '../../../AddCases/contexts';
import { colors } from '../../../../constants/colors';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  diagnoseList: Diagnose[];
  setDiagnose: Dispatch<SetStateAction<Diagnose | undefined>>;
  onOpenAddOther: () => void;
}

const ModalDignose = ({
  isOpen,
  closeModal,
  diagnoseList,
  setDiagnose,
  onOpenAddOther,
}: Props) => {
  const { selectedDiagnose } = useAddCasesContext();
  const [filteredDiagnose, setFilteredDiagnose] = useState(diagnoseList);

  useEffect(() => {
    const filtered = diagnoseList.filter(
      (diagnose) =>
        !selectedDiagnose.some((item) => item.title === diagnose?.name),
    );

    setFilteredDiagnose(filtered);
  }, [diagnoseList, selectedDiagnose]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = diagnoseList.filter((diagnose) =>
      diagnose.name.toLowerCase().includes(loweredFilter),
    );

    setFilteredDiagnose(filtered);
  };

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih diagnose</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari nama diagnose ..."
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
          Diagnose tidak ada di daftar
        </Text>
        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredDiagnose?.map((diagnose) => {
            return (
              <CardDiagnose
                key={diagnose.id}
                closeModal={closeModal}
                setDiagnose={setDiagnose}
                diagnose={diagnose}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalDignose;
