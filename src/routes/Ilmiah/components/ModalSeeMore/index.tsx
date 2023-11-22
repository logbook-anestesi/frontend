import {
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { ScientificLog } from '../../hooks/useGetPengajuanPembimbing/types';
import { convertDateForIlmiah } from '../../../../helpers';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  historyList: ScientificLog[];
}

const ModalSeeMore = ({ isOpen, closeModal, historyList }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Riwayat Ilmiah</ModalHeader>
        <Flex
          w="full"
          direction="column"
          gap={3}
          maxHeight={400}
          overflowY="scroll"
        >
          {historyList.map((history, index) => (
            <Text ml={3}>
              {index + 1}. {history.changes} -{' '}
              {convertDateForIlmiah(history.created)}
            </Text>
          ))}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSeeMore;
