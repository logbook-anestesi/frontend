import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormResiden from './components/FormResiden';
import { useEffect, useState } from 'react';
import { Residen } from './hooks/useGetResiden/types';
import FormRadioSeverity from './components/FormSeverity';

const PelanggaranAddPage = () => {
  const [selectedResiden, setSelectedResiden] = useState<Residen>();
  const [severity, setSeverity] = useState('');

  useEffect(() => {
    console.log({ selectedResiden, severity });
  }, [selectedResiden, severity]);

  return (
    <Flex direction="column">
      <Header title="Buat Laporan Pelanggaran" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormResiden
          residen={selectedResiden}
          setResiden={setSelectedResiden}
        />
        <FormRadioSeverity severity={severity} setSeverity={setSeverity} />
      </Flex>
    </Flex>
  );
};

export default PelanggaranAddPage;
