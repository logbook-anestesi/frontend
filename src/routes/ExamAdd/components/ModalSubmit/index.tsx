import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';
import { getCurrentMonth } from '../../../../helpers';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  exam: string;
  examType: string;
  penguji: DPJP | undefined;
}

const ModalSubmit = ({
  closeModal,
  isOpen,
  exam,
  examType,
  penguji,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b">Anda akan mengambil exam</Text>
          <Text as="b">
            {exam} pada bulan {getCurrentMonth()}
          </Text>

          <Flex direction="column" gap={3} my={5}>
            <Flex
              py={1}
              px={4}
              backgroundColor="rgba(102, 45, 145, 0.1)"
              borderRadius={10}
              as="b"
              color={colors.primaryPurple}
              fontSize="sm"
              justify="center"
            >
              {exam} - {examType}
            </Flex>

            <Flex
              py={1}
              px={4}
              backgroundColor="rgba(102, 45, 145, 0.1)"
              borderRadius={10}
              as="b"
              color={colors.primaryPurple}
              fontSize="sm"
              justify="center"
            >
              {penguji?.name}
            </Flex>
          </Flex>

          <Text color={colors.darkGrey} fontSize="sm" px={5} my={5}>
            Mohon pastikan Anda telah memilih stase yang Benar
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button colorScheme="teal" backgroundColor={colors.primaryPurple}>
              Ya
            </Button>
            <Button
              backgroundColor={colors.white}
              borderWidth={2}
              borderColor={colors.primaryPurple}
              onClick={closeModal}
            >
              Batal
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSubmit;
