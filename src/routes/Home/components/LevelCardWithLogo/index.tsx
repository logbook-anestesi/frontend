import { Card, Flex, Text, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { colors, getCompetenceColor } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import Ticker from '../../../../components/Ticker';

interface LevelCardWithLogoInterface {
  type: string;
  title: string;
  path: string;
  icon: string;
  cardNumber: number;
}

const LevelCardWithLogo = ({
  type,
  title,
  path,
  icon,
  cardNumber,
}: LevelCardWithLogoInterface) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outline"
      padding="16px"
      direction={{ base: 'row', sm: 'row' }}
      justify="space-between"
      align="center"
      onClick={() => navigate(path)}
    >
      <Flex gap="16px" align="center">
        <Image
          src={icon}
          maxWidth="44px"
          maxHeight="44px"
          backgroundColor={colors.lightGrey}
          borderRadius="10px"
          padding="10px"
        />
        <Flex direction="column">
          <Text fontSize="sm" color={colors.darkGrey}>
            {type}
          </Text>
          <Text fontSize="md" as="b" color={getCompetenceColor(title)}>
            {title}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="10px">
        {cardNumber > 0 && (
          <Ticker text={`${String(cardNumber)}`} isShowClose={false} />
        )}
        <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
      </Flex>
    </Card>
  );
};

export default LevelCardWithLogo;
