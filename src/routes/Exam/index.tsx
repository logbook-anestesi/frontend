import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import TableTitle from './components/TableTitle';
import { useNavigate } from 'react-router-dom';
import TableData from './components/TableData';
import useGetAllExam from './hooks/useGetAllExam';
import LoaderCircle from '../../components/LoaderCircle';
import { useState } from 'react';
import { ExamMenu } from './types';
import ExamDropdown from './components/ExamDropdown';
import ModalSelectExam from './components/ModalSelectExam';

const DEFAULT_EXAM_MENU = {
  title: 'Pilih Tipe Ujian',
  value: '-',
  path: '#',
};

const ExamPage = () => {
  const { loading, examList } = useGetAllExam();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedExam, setSelectedExam] = useState<ExamMenu>(DEFAULT_EXAM_MENU);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(selectedExam.path);
  };

  return (
    <Flex direction="column">
      <Header title="Ujian" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <ExamDropdown onClick={onOpen} selectedExam={selectedExam} />
        <ModalSelectExam
          closeModal={onClose}
          isOpen={isOpen}
          setExam={setSelectedExam}
        />

        <ButtonAdd handleOnClick={handleOnClick} />

        <TableTitle />
        {loading ? <LoaderCircle /> : <TableData examList={examList || []} />}
      </Flex>

      {/* Modal Section */}
    </Flex>
  );
};

export default ExamPage;
