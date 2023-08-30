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
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useState } from "react";
import FormLink from "../FormLink";
import Information from "../Information";
import { useIlmiahContext } from "../../contexts";
import useAddPengajuanKelulusan from "../../hooks/useAddPengajuanKelulusan";

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
  const [linkDocument, setLinkDocument] = useState("");

  const { pengajuanKelulusan } = useIlmiahContext();
  const { createPengajuanKelulusan, loading } = useAddPengajuanKelulusan();

  const handleSubmit = async () => {
    const response = await createPengajuanKelulusan({
      documentLink: linkDocument,
      scientificId: pengajuanKelulusan.id,
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Pengajuan Kelulusan berhasil dibuat",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      closeModal();
    }

    if (!response?.success) {
      toast({
        title: "Failed membuat Pengajuan Kelulusan",
        description: response?.message,
        status: "error",
        position: "top",
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
          Ajukan Kelulusan {pengajuanKelulusan.id}
        </ModalHeader>
        <ModalCloseButton />

        <Text mb={2}>Pembimbing</Text>

        <Flex direction="column" gap={5} mb={5}>
          <Flex direction="column" gap={1}>
            {pengajuanKelulusan?.approvals.map((user) => (
              <Text as="b">{user}</Text>
            ))}
          </Flex>

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
