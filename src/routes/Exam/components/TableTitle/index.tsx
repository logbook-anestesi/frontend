import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';

const TableTitle = () => {
  const navigate = useNavigate();

  const navigateToListStase = () => {
    navigate('/exam/all');
  };

  return (
    <Flex direction="column" gap="10px">
      <Flex direction="row" justify="space-between" align="center">
        <Text as="b">Riwayat Ujian</Text>
        <Text
          as="b"
          fontSize="x-small"
          cursor="pointer"
          color={colors.primaryPurple}
          onClick={navigateToListStase}
        >
          Lihat Daftar Exam
        </Text>
      </Flex>
    </Flex>
  );
};

export default TableTitle;
