import {
  Divider,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { Dispatch, SetStateAction } from 'react';
import { ExamMenu } from '../../types';
import { EXAM_LIST } from '../../../../constants/examList';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setExam: Dispatch<SetStateAction<ExamMenu>>;
}

const ModalSelectExam = ({ isOpen, closeModal, setExam }: Props) => {
  const handleClickExam = (dataExam: ExamMenu) => {
    setExam(dataExam);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={2}>
        <ModalHeader>Pilih Tipe Kasus</ModalHeader>
        <ModalCloseButton />
        {EXAM_LIST?.map((dataExam) => {
          return (
            <Flex
              direction="column"
              mb={2}
              mt={2}
              onClick={() => handleClickExam(dataExam)}
              key={dataExam.value}
            >
              <Text fontSize="sm" align="center">
                {dataExam.title}
              </Text>
              <Divider color={colors.darkGrey} mt={2} />
            </Flex>
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectExam;
