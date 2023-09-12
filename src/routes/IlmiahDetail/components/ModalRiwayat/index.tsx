import {
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { ScientificLog } from '../../hooks/useGetDetailKelulusan/types';
import { convertDateForIlmiah } from '../../../../helpers';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  riwayat: ScientificLog[];
}

const ModalRiwayat = ({ closeModal, isOpen, riwayat }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Riwayat </ModalHeader>
        <ModalCloseButton />

        <Flex direction="column" gap={4}>
          {riwayat.map((item) => (
            <Text>{`${convertDateForIlmiah(item.created)} - ${
              item.changes
            }`}</Text>
          ))}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalRiwayat;
