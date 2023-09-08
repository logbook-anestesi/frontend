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
} from "@chakra-ui/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { PainServiceType } from "../../../AddCases/hooks/useGetCasesForm/types";
import { useAddCasesContext } from "../../../AddCases/contexts";
import CardTypePainService from "./CardTypePainService";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  painServiceTypes: PainServiceType[];
  setTypePainService: Dispatch<SetStateAction<PainServiceType | undefined>>;
}

const ModalTypePainService = ({
  isOpen,
  closeModal,
  painServiceTypes,
  setTypePainService,
}: Props) => {
  const { selectedTypePainService } = useAddCasesContext();
  const [filteredTypePain, setFilteredTypePain] = useState(painServiceTypes);

  useEffect(() => {
    const filtered = painServiceTypes.filter(
      (typePainService) =>
        !selectedTypePainService.some(
          (item) => item.title === typePainService?.name
        )
    );

    setFilteredTypePain(filtered);
  }, [painServiceTypes, selectedTypePainService]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = painServiceTypes.filter((typePainService) =>
      typePainService.name.toLowerCase().includes(loweredFilter)
    );

    setFilteredTypePain(filtered);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Tipe Pain Service</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Cari tipe pain service ..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

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
