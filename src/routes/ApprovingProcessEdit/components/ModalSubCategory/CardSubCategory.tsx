import { Divider, Flex, Text } from '@chakra-ui/react';
import { OperationCategory } from '../../../../hooks/useGetCasesForm/types';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  subCategory: OperationCategory;
  closeModal: () => void;
  operationName: string;
  id: string;
}

const CardSubCategory = ({
  subCategory,
  closeModal,
  operationName,
  id,
}: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    closeModal();
    casesDispatch({
      type: 'set_selected_operation',
      data: {
        category: operationName,
        id: id,
        operation: subCategory.name,
      },
    });

    casesDispatch({
      type: 'set_operation_type_ids',
      data: {
        operationId: subCategory.id,
      },
    });
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{subCategory.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardSubCategory;
