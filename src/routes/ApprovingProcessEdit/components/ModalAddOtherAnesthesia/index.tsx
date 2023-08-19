import {
  Box,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import useAddAnesthesia from "../../hooks/useAddAnesthesia";
import { ChangeEvent, useState } from "react";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherAnesthesia = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useApprovalEditDispatch();
  const { createAnesthesia, loading } = useAddAnesthesia();
  const [anesthesia, setAnesthesia] = useState("");

  const handleCreateAnesthesia = async () => {
    const response = await createAnesthesia({ name: anesthesia });

    casesDispatch({
      type: "set_selected_anesthesia",
      data: {
        title: anesthesia,
        id: response?.anesthesiaId,
      },
    });

    casesDispatch({
      type: "set_anethesia_type_ids",
      data: {
        anesthesiaId: response?.anesthesiaId,
      },
    });

    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAnesthesia(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan tipe Anesthesia lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan tipe anesthesia ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateAnesthesia}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherAnesthesia;
