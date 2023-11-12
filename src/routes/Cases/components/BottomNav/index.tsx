import { Box, Divider, Flex } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import BottomNavIcon from '../BottomNavIcon';
import iconCase from '../../assets/case.png';
import summary from '../../assets/summary.png';
import { useNavigate } from 'react-router-dom';

interface Props {
  isProgressPage: boolean;
}

const BottomNav = ({ isProgressPage }: Props) => {
  const navigate = useNavigate();
  const handleOnClickList = () => {
    navigate('/cases');
    return;
  };
  const handleOnClickProgress = () => {
    navigate('/cases/progress');
    return;
  };
  return (
    <Flex
      direction="column"
      position="sticky"
      bottom={0}
      width="100%"
      backgroundColor={colors.white}
    >
      <Divider />
      <Box height={1} />

      <Flex height={50} justify="space-around">
        <BottomNavIcon
          image={iconCase}
          title="Daftar Cases"
          isActive={!isProgressPage}
          onClick={handleOnClickList}
        />
        <BottomNavIcon
          image={summary}
          title="Summary"
          isActive={isProgressPage}
          onClick={handleOnClickProgress}
        />
      </Flex>
      <Box height={1} />
    </Flex>
  );
};

export default BottomNav;
