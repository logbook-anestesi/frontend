import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import FormDate from '../ExamAdd/components/FormDate';

const ExamAddAlman = () => {
  const [date, setDate] = useState('');

  return (
    <Flex direction="column">
      <Header title="Tambah ALMAN" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormDate setDate={setDate} />
      </Flex>
    </Flex>
  );
};

export default ExamAddAlman;
