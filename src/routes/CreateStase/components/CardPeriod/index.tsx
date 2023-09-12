import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  monthValue: string;
}

const CardPeriod = ({ monthValue }: Props) => {
  return (
    <Flex direction="column" gap={2}>
      <Text color={colors.darkGrey} fontSize="sm">
        Periode
      </Text>
      <Flex
        width={207}
        backgroundColor={colors.lightGrey}
        height="10"
        borderRadius={10}
        justify="center"
        align="center"
      >
        <Text fontWeight="bold">{monthValue}</Text>
      </Flex>
    </Flex>
  );
};

export default CardPeriod;
