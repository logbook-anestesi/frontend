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
import { colors } from '../../../../constants/colors';
import { useState } from 'react';
import FormLink from '../FormLink';
import Information from '../Information';
import { useIlmiahContext } from '../../contexts';
import useAddPengajuanKelulusan from '../../hooks/useAddPengajuanKelulusan';
import useGetPengajuanPembimbing from '../../hooks/useGetPengajuanPembimbing';
import { convertUnderscoresToSpaces } from '../../../../helpers';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export interface PembimbingData {
  name: string;
  id: string;
}

const ModalAjukanKelulusan = ({ closeModal, isOpen }: Props) => {
  const toast = useToast();
  const [linkDocument, setLinkDocument] = useState('');

  const { pengajuanKelulusan } = useIlmiahContext();
  const { createPengajuanKelulusan, loading } = useAddPengajuanKelulusan();
  const { mutate } = useGetPengajuanPembimbing();

  const handleSubmit = async () => {
    const response = await createPengajuanKelulusan({
      documentLink: linkDocument,
      scientificId: pengajuanKelulusan.id,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Pengajuan Kelulusan berhasil dibuat',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      mutate();
      closeModal();
    }

    if (!response?.success) {
      toast({
        title: 'Failed membuat Pengajuan Kelulusan',
        description: 'Pastikan link document sudah sesuai format',
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
        <ModalHeader margin="auto" textAlign="center">
          Ajukan Kelulusan <br />{' '}
          {convertUnderscoresToSpaces(pengajuanKelulusan.id)}
        </ModalHeader>
        <ModalCloseButton />

        <Text mb={2}>Pembimbing</Text>

        <Flex direction="column" gap={5} mb={5}>
          <Flex direction="column" gap={1}>
            {pengajuanKelulusan?.approvals.map((user, index) => (
              <Text as="b" key={`user-${index}`}>
                {user}
              </Text>
            ))}
          </Flex>

          {pengajuanKelulusan?.type === 'TESIS' && (
            <Flex direction={'column'}>
              <Text mb={2}>Penentu Kelulusan</Text>
              <Text as="b" mb={2}>
                dr. Budi Haris (Ketua SPS)
              </Text>
              <Text as="b">dr. Arya Sakti (Ketua SPS)</Text>
            </Flex>
          )}

          <FormLink setLink={setLinkDocument} />

          <Information />
        </Flex>

        <Flex w="full" direction="column" gap={4}>
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

export default ModalAjukanKelulusan;
