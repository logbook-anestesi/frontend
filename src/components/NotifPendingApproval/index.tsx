import { EmailIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../constants/colors';

interface Props {
  totalPending: number;
}

const NotifPendingApproval = ({ totalPending }: Props) => {
  return (
    <Flex
      align="center"
      justify="center"
      gap="8px"
      borderRadius="8px"
      backgroundColor={colors.lightYellow}
      width="100%"
      padding="8px 0"
    >
      <EmailIcon />

      <Flex gap={1}>
        <Text fontSize="xs">Anda memiliki </Text>
        <Text fontSize="xs" fontWeight="bold">
          {totalPending}
        </Text>
        <Text fontSize="xs">pending approval</Text>
      </Flex>
    </Flex>
  );
};

export default NotifPendingApproval;
