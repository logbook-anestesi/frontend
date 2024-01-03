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
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import useGetResiden from '../../hooks/useGetResiden';
import { Residen } from '../../hooks/useGetResiden/types';
import CardName from './CardName';
import LoaderCircle from '../../../../components/LoaderCircle';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setResiden: Dispatch<SetStateAction<Residen | undefined>>;
}

const ModalResiden = ({ isOpen, closeModal, setResiden }: Props) => {
  const { residenList, loading } = useGetResiden();
  const [filteredResiden, setFilteredResiden] = useState(residenList);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = residenList.filter((residen) =>
      residen.name.toLocaleLowerCase().includes(loweredFilter),
    );

    setFilteredResiden(filtered);
  };

  const finalDataresiden = useMemo(() => {
    if (filteredResiden.length === 0) {
      return residenList;
    }

    return filteredResiden;
  }, [residenList, filteredResiden]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih residen</ModalHeader>

        <InputGroup>
          <Input placeholder="Search Residen" onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {loading ? (
          <LoaderCircle />
        ) : (
          <Flex direction="column" maxH={300} overflowY="scroll">
            {finalDataresiden?.map((residen) => {
              return (
                <CardName
                  residen={residen}
                  key={residen.id}
                  setResiden={setResiden}
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

export default ModalResiden;
