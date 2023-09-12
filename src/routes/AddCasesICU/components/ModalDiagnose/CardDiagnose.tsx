import { Divider, Flex, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { Diagnose } from '../../../../hooks/useGetCasesForm/types';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

interface Props {
  diagnose: Diagnose;
  closeModal: () => void;
  setDiagnose: Dispatch<SetStateAction<Diagnose | undefined>>;
}

const CardDiagnose = ({ diagnose, closeModal, setDiagnose }: Props) => {
  const casesDispatch = useAddCasesDispatch();

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

export default CardDiagnose;
