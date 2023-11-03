import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import FormDate from '../FormDate';
import FormKeperluan from '../FormKeperluan';
import { colors } from '../../../../constants/colors';
import { useState } from 'react';
import useCreateLeave from '../../hooks/useCreateLeave';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const AddCutiModal = ({ isOpen, closeModal }: Props) => {
  const toast = useToast();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const { createLeave, loading } = useCreateLeave();

  const handleSubmit = async () => {
    const response = await createLeave({
      description: description,
      endDate: endDate,
      startDate: startDate,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Leave Berhasil Dibuat',
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });

      closeModal();
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Add Leave',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Tambah Cuti</ModalHeader>
        <ModalCloseButton mb={3} />

        <Flex direction="column" maxH={700} overflowY="scroll" gap={3}>
          <FormDate title="Tanggal Mulai" setDate={setStartDate} />
          <FormDate title="Tanggal Selesai" setDate={setEndDate} />
          <FormKeperluan setDescription={setDescription} />

          <Text
            fontSize="sm"
            textAlign="center"
            px={7}
            mt={4}
            color={colors.darkGrey}
            mb={3}
          >
            Mohon pastikan data yang Anda input sudah benar, dan cuti Anda sudah
            disetujui di Scele
          </Text>

          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
            isLoading={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default AddCutiModal;
