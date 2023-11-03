import { Divider, Flex, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { Residen } from '../../hooks/useGetResiden/types';

interface Props {
  residen: Residen;
  setResiden: Dispatch<SetStateAction<Residen | undefined>>;
  closeModal: () => void;
}

const CardName = ({ residen, setResiden, closeModal }: Props) => {
  const handleOnClick = () => {
    setResiden(residen);
    closeModal();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleOnClick}
    >
      <Text>{residen.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
