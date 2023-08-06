import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import CardStase from "../CardStase";
import useGetAllStase from "../../hooks/useGetAllStase";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { Stase } from "../../hooks/useGetAllStase/types";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setStase: Dispatch<SetStateAction<Stase | undefined>>;
}

const ModalSelectStase = ({ isOpen, closeModal, setStase }: Props) => {
  const { listStase } = useGetAllStase();
  const [filteredStase, setFilteredStase] = useState(listStase);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = listStase.filter((stase) =>
      stase.stationName.toLowerCase().includes(loweredFilter)
    );

    setFilteredStase(filtered);
  };

  const finalDataStase = useMemo(() => {
    if (filteredStase.length === 0) {
      return listStase;
    }

    return filteredStase;
  }, [filteredStase, listStase]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Search stase..." onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {finalDataStase?.map((stase, idx) => {
            return (
              <CardStase
                stase={stase}
                key={idx}
                setStase={setStase}
                closeModal={closeModal}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectStase;
