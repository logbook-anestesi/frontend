import { Dispatch, SetStateAction } from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { Stase } from '../../hooks/useGetAllStase/types';

interface Props {
  stase: Stase;
  setStase: Dispatch<SetStateAction<Stase | undefined>>;
  closeModal: () => void;
}

const CardStase = ({ stase, setStase, closeModal }: Props) => {
  return (
    <Flex
      direction="column"
      mt={2}
      onClick={() => {
        setStase(stase);
        closeModal();
      }}
    >
      <Text fontSize="sm" fontWeight="bold">
        {stase.stationName}
      </Text>
      <Text fontSize="sm" color={colors.darkGrey}>
        Ketua: {stase.leaderName}
      </Text>
      <Divider color={colors.darkGrey} mt={2} />
    </Flex>
  );
};

export default CardStase;
