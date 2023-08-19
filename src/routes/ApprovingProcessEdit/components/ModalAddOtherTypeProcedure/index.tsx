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
import { ChangeEvent, useState } from "react";
import useAddProcedureType from "../../hooks/useAddProcedureType";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherTypeProcedure = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useApprovalEditDispatch();
  const { createProcedureType, loading } = useAddProcedureType();
  const [procedureType, setProcedureType] = useState("");

  const handleCreateProcedureType = async () => {
    const response = await createProcedureType({ name: procedureType });

    casesDispatch({
      type: "set_procedure_type",
      data: {
        procedureType: procedureType,
        procedureId: response?.procedureTypeId,
      },
    });

    casesDispatch({
      type: "set_procedure_type_ids",
      data: {
        procedureId: response?.procedureTypeId,
      },
    });

    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setProcedureType(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Type Procedure Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan type procedure ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateProcedureType}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherTypeProcedure;
