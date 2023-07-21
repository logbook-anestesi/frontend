import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import CardName from "./CardName";
import { DUMMY_DPJP } from "./dummyDPJP";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { DPJP } from "../FormDPJP";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setDPJP: Dispatch<SetStateAction<DPJP | undefined>>;
}

const ModalDPJP = ({ isOpen, closeModal, setDPJP }: Props) => {
  const listDPJP = DUMMY_DPJP;
  const [filteredDPJP, setFilteredDPJP] = useState(listDPJP);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = listDPJP.filter((dpjp) =>
      dpjp.name.toLowerCase().includes(loweredFilter)
    );

    setFilteredDPJP(filtered);
  };

  const finalDataDPJP = useMemo(() => {
    if (filteredDPJP.length === 0) {
      return listDPJP;
    }

    return filteredDPJP;
  }, [filteredDPJP, listDPJP]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Search DPJP..." onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {finalDataDPJP?.map((dpjp) => {
          return (
            <CardName
              dpjp={dpjp}
              key={dpjp.id}
              setDPJP={setDPJP}
              closeModal={closeModal}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalDPJP;
