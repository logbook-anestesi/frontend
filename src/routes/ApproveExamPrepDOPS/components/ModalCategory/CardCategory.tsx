import { Divider, Flex, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { OperationType } from '../../../../hooks/useGetCasesForm/types';

interface Props {
  operation: OperationType;
  closeModal: () => void;
  onOpenSub: () => void;
  setOperation: Dispatch<SetStateAction<OperationType | undefined>>;
}

const CardCategory = ({
  closeModal,
  operation,
  setOperation,
  onOpenSub,
}: Props) => {
  const handleClickCard = () => {
    setOperation(operation);
    closeModal();
    onOpenSub();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{operation.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardCategory;
