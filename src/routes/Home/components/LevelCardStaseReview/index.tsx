import { Card, Flex, Text, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import Ticker from '../../../../components/Ticker';
import module from '../../assets/module.png';

interface Props {
  staseName: string;
  cardNumber: number;
}

const LevelCardStaseReview = ({ staseName, cardNumber }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outline"
      padding="16px"
      direction={{ base: 'row', sm: 'row' }}
      justify="space-between"
      align="center"
      onClick={() => navigate('/stase/approval')}
    >
      <Flex gap="16px" align="center">
        <Image
          src={module}
          maxWidth="44px"
          maxHeight="44px"
          backgroundColor={colors.lightGrey}
          borderRadius="10px"
          padding="10px"
        />
        <Flex direction="column">
          <Text fontSize="sm" color={colors.darkGrey}>
            Dashboard Stase
          </Text>
          <Text fontSize="md" as="b">
            {staseName.includes(',')
              ? staseName.split(',').map((value, index) => (
                  <span key={index}>
                    {value.trim()}{' '}
                    {index < staseName.split(',').length - 1 && <br />}
                  </span>
                ))
              : staseName}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="10px">
        <Ticker text={`${String(cardNumber)}`} isShowClose={false} />
        <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
      </Flex>
    </Card>
  );
};

export default LevelCardStaseReview;
