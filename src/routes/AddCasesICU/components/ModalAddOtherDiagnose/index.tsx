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
import useAddDiagnoseType from '../../../AddCases/hooks/useAddDiagnose';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherDiagnose = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createDiagnoseType, loading } = useAddDiagnoseType();
  const [diagnose, setDiagnose] = useState('');
  const { mutate } = useGetCasesForm();

  const handleCreateDiagnose = async () => {
    const response = await createDiagnoseType({ name: diagnose });

    casesDispatch({
      type: 'set_diagnose',
      data: {
        diagnoseName: diagnose,
        diagnoseId: response?.diagnoseTypeId,
      },
    });

    casesDispatch({
      type: 'set_diagnose_ids',
      data: {
        diagnoseId: response?.diagnoseTypeId,
      },
    });

    mutate();
    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDiagnose(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Diagnose Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan type Diagnose ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateDiagnose}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherDiagnose;
