import { Flex } from '@chakra-ui/react';
import ReportCard from '../ReportCard';
import cases from '../../assets/cases.png';
import exam from '../../assets/exam.png';
import ilmiah from '../../assets/ilmiah.png';

const ReportCardContainer = () => {
  return (
    <Flex justify="space-between" gap={2}>
      <ReportCard icon={cases} title="Cases" path="/cases" />
      <ReportCard icon={ilmiah} title="Ilmiah" path="/ilmiah" />
      <ReportCard icon={exam} title="Exam" path="/" />
    </Flex>
  );
};

export default ReportCardContainer;
