import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import FormTipeIlmiah from "../FormTipeIlmiah";
import FormDosenPembimbing from "../FormDosenPembimbing";
import FormJudul from "../FormJudul";
import Information from "../Information";
import { colors } from "../../../../constants/colors";
import { useEffect, useState } from "react";
import useCreateIlmiah from "../../hooks/useCreateIlmiah";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddIlmiah = ({ closeModal, isOpen }: Props) => {
  const toast = useToast();
  const { createIlmiah, loading } = useCreateIlmiah();

  const [scientificType, setScientificType] = useState("");
  const [title, setTitle] = useState("");
  const [approvalUserIds, setApprovalUserIds] = useState<string[]>([]);

  useEffect(() => {
    console.log(
      "999 ini adalah useffect",
      scientificType,
      title,
      approvalUserIds
    );
  }, [approvalUserIds, scientificType, title]);

  const handleClickSubmit = async () => {
    const response = await createIlmiah({
      approvalUserIds: approvalUserIds,
      scientificType: scientificType,
      title: title,
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Ilmiah berhasil dibuat",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      closeModal();
    }

    if (!response?.success) {
      toast({
        title: "Failed membuat ilmiah",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Tambah Ilmiah</ModalHeader>
        <ModalCloseButton />

        <Flex w="full" direction="column" gap={4}>
          <FormTipeIlmiah setScientificType={setScientificType} />
          <FormDosenPembimbing setApprovalUserIds={setApprovalUserIds} />
          <FormJudul setTitle={setTitle} />
          <Information />

          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
            onClick={handleClickSubmit}
            isLoading={loading}
          >
            Submit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddIlmiah;
