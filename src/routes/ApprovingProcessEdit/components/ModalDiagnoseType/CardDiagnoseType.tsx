import { Divider, Flex, Text } from '@chakra-ui/react';
import { Diagnose } from '../../../../hooks/useGetCasesForm/types';
import { Dispatch, SetStateAction } from 'react';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  diagnose: Diagnose;
  closeModal: () => void;
  setDiagnose: Dispatch<SetStateAction<Diagnose | undefined>>;
}

const CardDiagnoseType = ({ diagnose, closeModal, setDiagnose }: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: 'set_diagnose',
      data: {
        diagnoseName: diagnose.name,
        diagnoseId: diagnose.id,
      },
    });

    casesDispatch({
      type: 'set_diagnose_ids',
      data: {
        diagnoseId: diagnose.id,
      },
    });

    setDiagnose(diagnose);
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
      <Text>{diagnose.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardDiagnoseType;
