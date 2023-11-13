import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  image: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const BottomNavIcon = ({ image, title, isActive, onClick }: Props) => {
  const imageStyle = {
    filter: 'grayscale(100%)', // Apply 100% grayscale
  };
  return (
    <Flex gap={1} align="center" onClick={onClick}>
      <Image
        width={7}
        height={7}
        src={image}
        style={isActive ? undefined : imageStyle}
      />
      <Text
        fontSize="sm"
        as={isActive ? 'b' : 'b'}
        color={isActive ? colors.primaryPurple : colors.darkGrey}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default BottomNavIcon;
