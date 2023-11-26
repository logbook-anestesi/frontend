import { Card, Flex, Text, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { colors, getCompetenceColor } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import Ticker from '../../../../components/Ticker';
import module from '../../assets/module.png';
import useGetStaseApprovalList from '../../../StaseApproval/hooks/useGetStaseApprovalList';

interface Props {
  staseName: string;
}

const LevelCardStaseReview = ({ staseName }: Props) => {
  const navigate = useNavigate();
  const { notif: notifStase } = useGetStaseApprovalList();

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
          <Text
            fontSize="md"
            as="b"
            color={getCompetenceColor('Stase Name [BE]')}
          >
            {staseName}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="10px">
        <Ticker text={`${String(notifStase)}`} isShowClose={false} />
        <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
      </Flex>
    </Card>
  );
};

export default LevelCardStaseReview;
