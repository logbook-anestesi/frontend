import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import TableTitle from './components/TableTitle';
import { useNavigate } from 'react-router-dom';

const ExamPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/exam/add');
  };

  return (
    <Flex direction="column">
      <Header title="Exam" />

      <Flex padding="30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={handleOnClick} />

        <TableTitle />
      </Flex>

      {/* Modal Section */}
    </Flex>
  );
};

export default ExamPage;
