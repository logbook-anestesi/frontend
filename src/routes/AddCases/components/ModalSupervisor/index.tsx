import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import CardName from "./CardName";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Supervisor } from "../../hooks/useGetSupervisor/types";
import useGetSupervisor from "../../hooks/useGetSupervisor";
import { useAddCasesContext } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setSupervisor: Dispatch<SetStateAction<Supervisor | undefined>>;
}

const ModalSupervisor = ({ isOpen, closeModal, setSupervisor }: Props) => {
  const { selectedSupervisor: supervisorList } = useAddCasesContext();
  const { supervisors } = useGetSupervisor();
  const [filteredSupervisor, setFilteredASupervisor] = useState(supervisors);

  useEffect(() => {
    const filtered = supervisors.filter(
      (supervisor) => !supervisorList.some((item) => item === supervisor?.name)
    );

    setFilteredASupervisor(filtered);
  }, [supervisorList, supervisors]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = supervisors.filter((supervisor) =>
      supervisor.name.toLocaleLowerCase().includes(loweredFilter)
    );

    setFilteredASupervisor(filtered);
  };

  const finalDataSupervisor = useMemo(() => {
    if (filteredSupervisor.length === 0) {
      return supervisors;
    }

    return filteredSupervisor;
  }, [filteredSupervisor, supervisors]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Supervisor</ModalHeader>

        <InputGroup>
          <Input
            placeholder="Search Supervisor..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {finalDataSupervisor?.map((supervisor) => {
            return (
              <CardName
                supervisor={supervisor}
                key={supervisor.id}
                setSupervisor={setSupervisor}
                closeModal={closeModal}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSupervisor;
