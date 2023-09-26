import { Divider, Flex, Text } from '@chakra-ui/react';
import { PainServiceType } from '../../../../hooks/useGetCasesForm/types';
import { Dispatch, SetStateAction } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  typePainService: PainServiceType;
  closeModal: () => void;
  setTypePainService: Dispatch<SetStateAction<PainServiceType | undefined>>;
}

const CardTypePainService = ({
  typePainService,
  closeModal,
  setTypePainService,
}: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: 'set_type_pain_service',
      data: {
        typePainName: typePainService.name,
        typePainId: typePainService.id,
      },
    });

    casesDispatch({
      type: 'set_type_pain_ids',
      data: {
        typePainId: typePainService.id,
      },
    });

    setTypePainService(typePainService);
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
      <Text>{typePainService.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardTypePainService;
