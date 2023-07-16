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
import CardStase from "../CardStase";
import useGetAllStase from "../../hooks/useGetAllStase";
import { ChangeEvent, useMemo, useState } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onOpen: () => void;
}

const ModalSelectStase = ({ isOpen, closeModal }: Props) => {
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

        {finalDataStase?.map((stase, idx) => {
          return (
            <CardStase
              lecturer={stase.leaderUserName}
              staseName={stase.stationName}
              key={idx}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectStase;
