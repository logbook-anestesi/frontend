import {
  Box,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import CardCategory from './CardCategory';
import { Dispatch, SetStateAction } from 'react';
import { OperationType } from '../../../../hooks/useGetCasesForm/types';

export interface Category {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onOpenSub: () => void;
  setOperation: Dispatch<SetStateAction<OperationType | undefined>>;
  operationType?: OperationType[];
}

const ModalCategory = ({
  isOpen,
  closeModal,
  setOperation,
  onOpenSub,
  operationType,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih kategori tipe operasi</ModalHeader>
        <ModalCloseButton />

        <Box height={3} />

        <Flex direction="column" maxH={300} overflowY="scroll">
          {operationType?.map((operation) => {
            return (
              <CardCategory
                key={operation.id}
                operation={operation}
                closeModal={closeModal}
                setOperation={setOperation}
                onOpenSub={onOpenSub}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalCategory;
