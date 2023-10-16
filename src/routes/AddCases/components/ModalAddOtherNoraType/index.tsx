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
import { useAddCasesDispatch } from '../../contexts';
import useGetCasesForm from '../../../../hooks/useGetCasesForm';
import useAddNoraType from '../../hooks/useAddNoraType';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherNoraType = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createNoraType, loading } = useAddNoraType();
  const [noraType, setNoraType] = useState('');
  const { mutate } = useGetCasesForm();

  const handleCreateNoraType = async () => {
    const response = await createNoraType({ name: noraType });

    casesDispatch({
      type: 'set_nora_procedure_type',
      data: {
        noraProcedureType: noraType,
        id: response?.noraTypeId,
      },
    });

    casesDispatch({
      type: 'set_nora_procedure_type_ids',
      data: {
        noraProcedureId: response?.noraTypeId,
      },
    });

    mutate();
    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNoraType(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Type Nora Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan type Nora ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateNoraType}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherNoraType;
