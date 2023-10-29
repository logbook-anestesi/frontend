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
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useState } from 'react';
import useGetCasesForm from '../../../../hooks/useGetCasesForm';
import useAddPainProcedure from '../../../AddCases/hooks/useAddPainProcedure';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherPainProcedure = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createPainProcedure, loading } = useAddPainProcedure();
  const [painProcedure, setPainProcedure] = useState('');
  const { mutate } = useGetCasesForm();

  const handleCreatePainProcedure = async () => {
    const response = await createPainProcedure({ name: painProcedure });

    casesDispatch({
      type: 'set_procedure_pain_service',
      data: {
        procedurePainName: painProcedure,
        procedurePainId: response?.painProcedureId,
      },
    });

    casesDispatch({
      type: 'set_procedure_pain_ids',
      data: {
        procedurePainId: response?.painProcedureId,
      },
    });

    mutate();
    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPainProcedure(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Pain Procedure Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan Pain Procedure ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreatePainProcedure}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherPainProcedure;
