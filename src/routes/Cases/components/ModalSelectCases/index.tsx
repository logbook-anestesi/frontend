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
import { CASE_LIST } from '../../../../constants/caseList';
import { colors } from '../../../../constants/colors';
import { Dispatch, SetStateAction } from 'react';
import { CaseMenu } from '../../types';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setCase: Dispatch<SetStateAction<CaseMenu>>;
}

const ModalSelectCases = ({ isOpen, closeModal, setCase }: Props) => {
  const handleClickCase = (dataCase: CaseMenu) => {
    setCase(dataCase);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={2}>
        <ModalHeader>Pilih Case</ModalHeader>
        <ModalCloseButton />
        {CASE_LIST?.map((dataCase) => {
          return (
            <Flex
              direction="column"
              mb={2}
              mt={2}
              onClick={() => handleClickCase(dataCase)}
              key={dataCase.value}
            >
              <Text fontSize="sm" align="center">
                {dataCase.title}
              </Text>
              <Divider color={colors.darkGrey} mt={2} />
            </Flex>
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectCases;
