import { EmailIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../constants/colors';

interface InfoBoxInterface {
  type: 'warning' | 'alert';
  message: string;
  isStase?: boolean;
  staseDate?: string;
}

const InfoBox = ({ type, message, isStase, staseDate }: InfoBoxInterface) => {
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
      <Flex gap={1}>
        {isStase ? (
          <>
            <Text fontSize="xs">{message}</Text>
            <Text fontSize="xs" fontWeight="bold">
              {staseDate}
            </Text>
          </>
        ) : (
          <Text fontSize="xs">{message}</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default InfoBox;
