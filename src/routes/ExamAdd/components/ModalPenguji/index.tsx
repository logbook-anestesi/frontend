import { Search2Icon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import CardName from './CardName';
import { ChangeEvent, useMemo, useState } from 'react';
import useGetDPJP from '../../../AddCases/hooks/useGetDPJP';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setPenguji: React.Dispatch<React.SetStateAction<DPJP | undefined>>;
}

const ModalPenguji = ({ isOpen, closeModal, setPenguji }: Props) => {
  const { dpjpList: pengujiList } = useGetDPJP();
  const [filteredPenguji, setFilteredPenguji] = useState(pengujiList);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = pengujiList.filter((penguji) =>
      penguji.name.toLocaleLowerCase().includes(loweredFilter),
    );

    setFilteredPenguji(filtered);
  };

  const finalDataPenguji = useMemo(() => {
    if (filteredPenguji.length === 0) {
      return pengujiList;
    }

    return filteredPenguji;
  }, [pengujiList, filteredPenguji]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Penguji</ModalHeader>

        <InputGroup>
          <Input
            placeholder="Search Penguji..."
            onChange={handleChangeSearch}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {finalDataPenguji?.map((penguji) => {
            return (
              <CardName
                penguji={penguji}
                key={penguji.id}
                setPenguji={setPenguji}
                closeModal={closeModal}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalPenguji;
