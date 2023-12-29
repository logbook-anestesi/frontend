import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormResiden from './components/FormResiden';
import { useState } from 'react';
import { Residen } from './hooks/useGetResiden/types';
import FormRadioSeverity from './components/FormSeverity';
import FormDate from './components/FormDate';
import FormTitle from './components/FormTitle';
import FormDescription from './components/FormDescription';
import { colors } from '../../constants/colors';
import useAddPelanggaran from './hooks/useAddPelanggaran';
import { useNavigate } from 'react-router-dom';
import ModalConfirmSubmit from './components/ModalConfirmSubmit';

const PelanggaranAddPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { createPelanggaran, loading } = useAddPelanggaran();

  const { onClose, isOpen, onOpen } = useDisclosure();

  const [selectedResiden, setSelectedResiden] = useState<Residen>();
  const [severity, setSeverity] = useState('');
  const [severityDate, setSeverityDate] = useState(new Date().toISOString());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenModal = () => {
    if (
      severity === '' ||
      severityDate === '' ||
      title === '' ||
      description === '' ||
      selectedResiden === null
    ) {
      toast({
        title: 'Harap lengkapi data terlebih dahulu',
        position: 'top',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });

      return;
    }

    console.log({ severityDate });

    onOpen();
  };

  const handleSubmit = async () => {
    const response = await createPelanggaran({
      description: description,
      residenUserId: selectedResiden?.id || '',
      severity: severity,
      title: title,
      violationDate: severityDate,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Pelanggaran Berhasil Dibuat',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate(-1);
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Add Pelanggaran',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 7000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column">
      <Header title="Buat Laporan Pelanggaran" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormResiden
          residen={selectedResiden}
          setResiden={setSelectedResiden}
        />
        <FormRadioSeverity severity={severity} setSeverity={setSeverity} />
        <FormDate setSeverityDate={setSeverityDate} />
        <FormTitle setTitle={setTitle} />
        <FormDescription setDescription={setDescription} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={10}
          onClick={handleOpenModal}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>

      {/* Modal Section */}
      <ModalConfirmSubmit
        closeModal={onClose}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        residenName={selectedResiden?.name || ''}
        violation={description}
      />
    </Flex>
  );
};

export default PelanggaranAddPage;
