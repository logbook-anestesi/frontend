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
  setAsesor: React.Dispatch<React.SetStateAction<DPJP | undefined>>;
}

const ModalAsesor = ({ isOpen, closeModal, setAsesor }: Props) => {
  const { dpjpList: asesorList } = useGetDPJP();
  const [filteredAsesor, setFilteredAsesor] = useState(asesorList);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = asesorList.filter((asesor) =>
      asesor.name.toLocaleLowerCase().includes(loweredFilter),
    );

    setFilteredAsesor(filtered);
  };

  const finalDataAsesor = useMemo(() => {
    if (filteredAsesor.length === 0) {
      return asesorList;
    }

    return filteredAsesor;
  }, [asesorList, filteredAsesor]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih Asesor</ModalHeader>

        <InputGroup>
          <Input placeholder="Search Asesor..." onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {finalDataAsesor?.map((asesor) => {
            return (
              <CardName
                asesor={asesor}
                key={asesor.id}
                setAsesor={setAsesor}
                closeModal={closeModal}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalAsesor;
