import { Card, Flex, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { colors, getCompetenceColor } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface LevelCardInterface {
  type: string;
  title: string;
  path: string;
}

const LevelCard = ({ type, title, path }: LevelCardInterface) => {
  const navigate = useNavigate();

  const isNotHaveStase = useMemo(() => {
    return type === 'Stase' && title === '';
  }, []);

  const finalTitle = useMemo(() => {
    if (isNotHaveStase) return 'Belum Memilih Stase';
    return title === '' ? 'Belum ada data' : title;
  }, [title, type]);

  const getColorTitle = (title: string) => {
    if (isNotHaveStase) {
      return colors.primaryRed;
    }

    return getCompetenceColor(title);
  };

  return (
    <Card
      variant="outline"
      padding="16px"
      direction={{ base: 'row', sm: 'row' }}
      justify="space-between"
      align="center"
      onClick={() => navigate(path)}
    >
      <Flex direction="column">
        <Text fontSize="sm" color={colors.darkGrey}>
          {type}
        </Text>
        <Text fontSize="md" as="b" color={getColorTitle(title)}>
          {finalTitle}
        </Text>
      </Flex>

      <ChevronRightIcon boxSize="35px" color={colors.darkGrey} />
    </Card>
  );
};

export default LevelCard;
