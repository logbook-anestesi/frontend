import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  image: string;
  title: string;
  isActive: boolean;
}

const BottomNavIcon = ({ image, title, isActive }: Props) => {
  return (
    <Flex gap={1} align="center">
      <Image width={7} height={7} src={image} />
      <Text
        fontSize="sm"
        as={isActive ? 'b' : 'p'}
        color={isActive ? colors.primaryPurple : colors.darkGrey}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default BottomNavIcon;
