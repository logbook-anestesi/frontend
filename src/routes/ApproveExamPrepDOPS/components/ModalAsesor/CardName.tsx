import { Divider, Flex, Text } from '@chakra-ui/react';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';

interface Props {
  asesor: DPJP;
  setAsesor: React.Dispatch<React.SetStateAction<DPJP | undefined>>;
  closeModal: () => void;
}

const CardName = ({ asesor, setAsesor, closeModal }: Props) => {
  const handleClickCard = () => {
    setAsesor(asesor);
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
      <Text>{asesor.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
