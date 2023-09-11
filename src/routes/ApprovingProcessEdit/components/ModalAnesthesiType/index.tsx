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
} from "@chakra-ui/react";
import { AnesthesiaType } from "../../../../hooks/useGetCasesForm/types";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";
import CardAnesthesiType from "./CardAnesthesiType";
import { useApprovalEditContext } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  anesthesiaList: AnesthesiaType[];
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
  onOpenAddOther: () => void;
}

const ModalAnesthesiType = ({
  isOpen,
  closeModal,
  anesthesiaList,
  setAnesthesia,
  onOpenAddOther,
}: Props) => {
  const { selectedAnesthesia } = useApprovalEditContext();
  const [filteredAnesthesi, setFilteredAnesthesi] = useState(anesthesiaList);

  useEffect(() => {
    const filtered = anesthesiaList.filter(
      (anesthesia) =>
        !selectedAnesthesia.some((item) => item.title === anesthesia?.name)
    );

    setFilteredAnesthesi(filtered);
  }, [anesthesiaList, selectedAnesthesia]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = anesthesiaList.filter((anesthesia) =>
      anesthesia.name.toLowerCase().includes(loweredFilter)
    );

    setFilteredAnesthesi(filtered);
  };

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih tipe anestesi</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari tipe anestesi ..."
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
          Tipe tidak ada di daftar
        </Text>

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredAnesthesi?.map((anesthesia, idx) => {
            return (
              <CardAnesthesiType
                key={`anesthesia-${idx}`}
                anesthesia={anesthesia}
                closeModal={closeModal}
                setAnesthesia={setAnesthesia}
                id={anesthesia.id}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalAnesthesiType;
