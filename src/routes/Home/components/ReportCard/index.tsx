import { Card, Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';

interface ReportCardInterface {
  icon: string;
  title: string;
  path: string;
}

const ReportCard = ({ icon, title, path }: ReportCardInterface) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(path);
  };

  return (
    <Card
      variant="outline"
      padding="24px"
      justify="space-between"
      align="center"
      width={130}
      onClick={handleClickCard}
    >
      <Flex
        width="50px"
        height="50px"
        padding="15px"
        backgroundColor={colors.lightGrey}
        borderRadius="10px"
        align="center"
      >
        <Image src={icon} width="34px" height="auto" />
      </Flex>

      <Flex direction="column" align="center">
        <Text color={colors.darkGrey} marginTop="16px" fontSize="md">
          Laporan
        </Text>
        <Text as="b" fontSize="md">
          {title}
        </Text>
      </Flex>
    </Card>
  );
};

export default ReportCard;
