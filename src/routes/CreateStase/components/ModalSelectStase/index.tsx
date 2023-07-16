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

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onOpen: () => void;
}

const ModalSelectStase = ({ isOpen, closeModal }: Props) => {
  const { listStase } = useGetAllStase();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Search stase..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {listStase?.map((stase) => {
          return (
            <CardStase
              lecturer={stase.leaderUserName}
              staseName={stase.stationName}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectStase;
