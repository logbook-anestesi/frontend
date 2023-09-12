import { Divider, Flex, Text } from '@chakra-ui/react';
import { Pembimbing } from '../../hooks/useGetPembimbing/types';
import { PembimbingData } from '../ModalAddIlmiah';

interface Props {
  pembimbing: Pembimbing;
  setPembimbing: (user: PembimbingData) => void;
  closeModal: () => void;
}

const CardName = ({ pembimbing, setPembimbing, closeModal }: Props) => {
  const handleClickCard = () => {
    setPembimbing({
      id: pembimbing?.id,
      name: pembimbing?.name,
    });
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
      <Text>{pembimbing.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
