import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  selectedMenu: number;
  setSelectedMenu: React.Dispatch<React.SetStateAction<number>>;
}

const TopNavbar = ({ selectedMenu, setSelectedMenu }: Props) => {
  return (
    <Flex
      borderY="2px solid black"
      borderColor={colors.lightGrey}
      justify="space-around"
      paddingY={2}
    >
      <Text
        fontSize="sm"
        color={selectedMenu === 0 ? colors.primaryPurple : colors.darkGrey}
        as={selectedMenu === 0 ? 'b' : 'p'}
        textDecor={selectedMenu === 0 ? 'underline' : ''}
        onClick={() => setSelectedMenu(0)}
      >
        Seluruh Residen
      </Text>
      <Text
        fontSize="sm"
        color={selectedMenu === 1 ? colors.primaryPurple : colors.darkGrey}
        as={selectedMenu === 1 ? 'b' : 'p'}
        textDecor={selectedMenu === 1 ? 'underline' : ''}
        onClick={() => setSelectedMenu(1)}
      >
        Residen Bulan Ini
      </Text>
    </Flex>
  );
};

export default TopNavbar;
