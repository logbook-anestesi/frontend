import { Divider, Flex, Text } from '@chakra-ui/react';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';

interface Props {
  penguji: DPJP;
  setPenguji: (dpjp: DPJP) => void;
  closeModal: () => void;
}

const CardName = ({ penguji, setPenguji, closeModal }: Props) => {
  const handleClickCard = () => {
    setPenguji(penguji);
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
      <Text>{penguji.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
