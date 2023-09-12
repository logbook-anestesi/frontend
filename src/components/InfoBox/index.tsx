import { EmailIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../constants/colors';

interface InfoBoxInterface {
  type: 'warning' | 'alert';
  message: string;
}

const InfoBox = ({ type, message }: InfoBoxInterface) => {
  return (
    <Flex
      align="center"
      justify="center"
      gap="8px"
      borderRadius="8px"
      backgroundColor={
        type === 'warning' ? colors.lightYellow : colors.lightRed
      }
      width="100%"
      padding="8px 0"
    >
      {type === 'warning' ? <WarningTwoIcon /> : <EmailIcon />}
      <Text fontSize="xs">{message}</Text>
    </Flex>
  );
};

export default InfoBox;
