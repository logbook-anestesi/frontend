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
import { NoraProcedureType } from "../../../../hooks/useGetCasesForm/types";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";
import CardNoraProcedureType from "./CardNoraProcedureType";
import { useAddCasesContext } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  noraProcedureList: NoraProcedureType[];
  setNoraProcedure: Dispatch<SetStateAction<NoraProcedureType | undefined>>;
  onOpenAddOther: () => void;
}

const ModalNoraProcedureType = ({
  isOpen,
  closeModal,
  onOpenAddOther,
  noraProcedureList,
  setNoraProcedure,
}: Props) => {
  const { selectedNoraProcedure } = useAddCasesContext();
  const [filteredNoraProcedure, setFilteredNoraProcedure] =
    useState(noraProcedureList);

  useEffect(() => {
    const filtered = noraProcedureList.filter(
      (nora) =>
        !selectedNoraProcedure.some(
          (noraProcedure) => noraProcedure.title === nora?.name
        )
    );

    setFilteredNoraProcedure(filtered);
  }, [noraProcedureList, selectedNoraProcedure]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = noraProcedureList.filter((noraProcedure) =>
      noraProcedure.name.toLowerCase().includes(loweredFilter)
    );

    setFilteredNoraProcedure(filtered);
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
        ></Text>

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredNoraProcedure?.map((noraProcedure) => {
            return (
              <CardNoraProcedureType
                key={noraProcedure.id}
                closeModal={closeModal}
                setNoraProcedure={setNoraProcedure}
                noraProcedure={noraProcedure}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalNoraProcedureType;
