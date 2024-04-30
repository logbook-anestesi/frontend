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
import useAddSubCategoryOp from '../../../AddCases/hooks/useAddSubCategoryOp';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  operationName: string;
  operationId: string;
}

const ModalAddOtherSubCategoryOp = ({
  isOpen,
  closeModal,
  operationName,
  operationId,
}: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createSubcategoryOperation, loading } = useAddSubCategoryOp();
  const [subCategoryName, setSubCategoryName] = useState('');
  const { mutate } = useGetCasesForm();

  const handleCreateSubCategoryOperation = async () => {
    const response = await createSubcategoryOperation({
      name: subCategoryName,
      tier: 2,
      parentId: operationId,
    });

    casesDispatch({
      type: 'set_selected_operation',
      data: {
        category: operationName,
        operation: subCategoryName,
        id: response?.subCategoryOperationId,
      },
    });

    casesDispatch({
      type: 'set_operation_type_ids',
      data: {
        operationId: response?.subCategoryOperationId,
      },
    });

    mutate();
    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSubCategoryName(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan Sub Category Operasi {operationName} Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan sub category name ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateSubCategoryOperation}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherSubCategoryOp;
