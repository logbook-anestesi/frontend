import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import useAddApproval from "../../hooks/useAddApprovals";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  ilmiahId: string;
  statusApprove: string;
}

const ModalApprove = ({
  closeModal,
  isOpen,
  ilmiahId,
  statusApprove,
}: Props) => {
  const toast = useToast();
  const { createApproval, loading } = useAddApproval();

  const handleApproval = async (type: string) => {
    const response = await createApproval({
      productId: ilmiahId,
      status: type,
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Success Approve Ilmiah",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      window.location.reload();
      return;
    }

    if (!response?.success) {
      toast({
        title: "Failed Approve Ilmiah",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column" align="center" textAlign="center">
          <Text as="b">
            Anda akan {statusApprove === "APPROVED" ? "Menyetujui" : "Menolak"}
          </Text>
          <Text as="b" mb={4}>
            {ilmiahId}
          </Text>

          <Flex direction="column" gap={2} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={() => handleApproval(statusApprove)}
              isLoading={loading}
            >
              Ya
            </Button>
            <Button
              backgroundColor={colors.white}
              borderWidth={2}
              borderColor={colors.primaryPurple}
              onClick={closeModal}
            >
              Tidak
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalApprove;
