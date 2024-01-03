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
import useAddPainType from '../../../AddCases/hooks/useAddPainType';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherPainType = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createPainType, loading } = useAddPainType();
  const [painType, setPainType] = useState('');
  const { mutate } = useGetCasesForm();

  const handleCreatePainType = async () => {
    const response = await createPainType({ name: painType });

    casesDispatch({
      type: 'set_type_pain_service',
      data: {
        typePainName: painType,
        typePainId: response?.painTypeId,
      },
    });

    casesDispatch({
      type: 'set_type_pain_ids',
      data: {
        typePainId: response?.painTypeId,
      },
    });

    mutate();
    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPainType(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Pain Type Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan Pain Type"
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreatePainType}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherPainType;
