import { Button, Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import FormResiden from './components/FormResiden';
import { useEffect, useState } from 'react';
import { Residen } from './hooks/useGetResiden/types';
import FormRadioSeverity from './components/FormSeverity';
import FormDate from './components/FormDate';
import FormTitle from './components/FormTitle';
import FormDescription from './components/FormDescription';
import { colors } from '../../constants/colors';

const PelanggaranAddPage = () => {
  const [selectedResiden, setSelectedResiden] = useState<Residen>();
  const [severity, setSeverity] = useState('');
  const [severityDate, setSeverityDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log({
      selectedResiden,
      severity,
      severityDate,
      title,
      description,
    });
  }, [selectedResiden, severity, severityDate, title, description]);

  return (
    <Flex direction="column">
      <Header title="Buat Laporan Pelanggaran" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <FormResiden
          residen={selectedResiden}
          setResiden={setSelectedResiden}
        />
        <FormRadioSeverity severity={severity} setSeverity={setSeverity} />
        <FormDate setSeverityDate={setSeverityDate} />
        <FormTitle setTitle={setTitle} />
        <FormDescription setDescription={setDescription} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={10}
          // onClick={handleSubmitForm}
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default PelanggaranAddPage;
