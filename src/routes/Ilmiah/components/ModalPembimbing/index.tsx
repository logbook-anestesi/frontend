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
import { ChangeEvent, useMemo, useState } from "react";
import useGetPembimbing from "../../hooks/useGetPembimbing";
import LoaderCircle from "../../../../components/LoaderCircle";
import { PembimbingData } from "../ModalAddIlmiah";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setPembimbing: (userId: PembimbingData) => void;
  listPembimbing: PembimbingData[];
}

const ModalPembimbing = ({ isOpen, closeModal, setPembimbing }: Props) => {
  const { pembimbingList, loading } = useGetPembimbing();
  const [filteredPembimbing, setFilteredPembimbing] = useState(pembimbingList);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = pembimbingList.filter((pembimbing) =>
      pembimbing.name.toLocaleLowerCase().includes(loweredFilter)
    );

    setFilteredPembimbing(filtered);
  };

  const finalDataPembimbing = useMemo(() => {
    if (filteredPembimbing.length === 0) {
      return pembimbingList;
    }

    return filteredPembimbing;
  }, [pembimbingList, filteredPembimbing]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Pembimbing</ModalHeader>

        <InputGroup>
          <Input
            placeholder="Search Pembimbing..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {loading ? (
          <LoaderCircle />
        ) : (
          <Flex direction="column" maxH={300} overflowY="scroll">
            {finalDataPembimbing?.map((pembimbing) => {
              return (
                <CardName
                  pembimbing={pembimbing}
                  key={pembimbing.id}
                  setPembimbing={setPembimbing}
                  closeModal={closeModal}
                />
              );
            })}
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalPembimbing;
