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
  useMemo,
  useState,
} from "react";
import useGetDPJP from "../../hooks/useGetDPJP";
import { DPJP } from "../../hooks/useGetDPJP/types";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setDPJP: Dispatch<SetStateAction<DPJP | undefined>>;
}

const ModalDPJP = ({ isOpen, closeModal, setDPJP }: Props) => {
  const { dpjpList } = useGetDPJP();
  const [filteredDPJP, setFilteredDPJP] = useState(dpjpList);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = dpjpList.filter((dpjp) =>
      dpjp.name.toLocaleLowerCase().includes(loweredFilter)
    );

    setFilteredDPJP(filtered);
  };

  const finalDataDPJP = useMemo(() => {
    if (filteredDPJP.length === 0) {
      return dpjpList;
    }

    return filteredDPJP;
  }, [dpjpList, filteredDPJP]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih DPJP</ModalHeader>

        <InputGroup>
          <Input placeholder="Search DPJP..." onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
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
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalDPJP;
