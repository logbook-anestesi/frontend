import { Divider, Flex, Text } from '@chakra-ui/react';
import { PainServiceProcedure } from '../../../../hooks/useGetCasesForm/types';
import { Dispatch, SetStateAction } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  procedurePainService: PainServiceProcedure;
  closeModal: () => void;
  setProcedurePainService: Dispatch<
    SetStateAction<PainServiceProcedure | undefined>
  >;
}

const CardProcedurePainService = ({
  procedurePainService,
  closeModal,
  setProcedurePainService,
}: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: 'set_procedure_pain_service',
      data: {
        procedurePainName: procedurePainService.name,
        procedurePainId: procedurePainService.id,
      },
    });

    casesDispatch({
      type: 'set_procedure_pain_ids',
      data: {
        procedurePainId: procedurePainService.id,
      },
    });

    setProcedurePainService(procedurePainService);
    closeModal();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{procedurePainService.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardProcedurePainService;
