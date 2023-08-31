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
import ListSPSKPS from "../ListSPSKPS";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export interface PembimbingData {
  name: string;
  id: string;
}

const ModalAddIlmiah = ({ closeModal, isOpen }: Props) => {
  const toast = useToast();
  const { createIlmiah, loading } = useCreateIlmiah();

  const [scientificType, setScientificType] = useState("");
  const [title, setTitle] = useState("");
  const [showSpsKps, setShowSpsKps] = useState(false);
  const [approvalUser, setApprovalUser] = useState<PembimbingData[]>([]);

  const setPembimbing = (user: PembimbingData) => {
    const exists = approvalUser.some(
      (existingUser) => existingUser.id === user.id
    );

    if (!exists) {
      setApprovalUser((prev) => [...prev, user]);
    }
  };

  const handleClickSubmit = async () => {
    const response = await createIlmiah({
      approvalUserIds: approvalUser?.map((user) => user.id),
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

      window.location.reload();
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

  const handleOnClose = () => {
    setScientificType("");
    setTitle("");
    setApprovalUser([]);

    closeModal();
  };

  useEffect(() => {
    if (scientificType === "TESIS") {
      setShowSpsKps(true);
      return;
    }

    setShowSpsKps(false);
  }, [scientificType]);

  console.log("999 scientific type", { scientificType });

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Tambah Ilmiah</ModalHeader>
        <ModalCloseButton />

        <Flex
          w="full"
          direction="column"
          gap={4}
          maxHeight={500}
          overflowY="scroll"
        >
          <FormTipeIlmiah setScientificType={setScientificType} />
          <FormDosenPembimbing
            setApprovalUser={setPembimbing}
            listPembimbing={approvalUser}
          />

          {showSpsKps && <ListSPSKPS />}

          <FormJudul setTitle={setTitle} />

          <Information />
        </Flex>

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleClickSubmit}
          isLoading={loading}
          my={5}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddIlmiah;
