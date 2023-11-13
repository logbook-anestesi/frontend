import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import TableTitle from './components/TableTitle';
import { useNavigate } from 'react-router-dom';
import TableData from './components/TableData';
import useGetAllExam from './hooks/useGetAllExam';
import LoaderCircle from '../../components/LoaderCircle';

const ExamPage = () => {
  const { loading, examList } = useGetAllExam();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/exam/add');
  };

  return (
    <Flex direction="column">
      <Header title="Ujian" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={handleOnClick} />

        <TableTitle />
        {loading ? <LoaderCircle /> : <TableData examList={examList || []} />}
      </Flex>

      {/* Modal Section */}
    </Flex>
  );
};

export default ExamPage;
