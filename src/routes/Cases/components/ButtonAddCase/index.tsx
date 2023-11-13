import { Button, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { CASE_LIST } from '../../../../constants/caseList';
import { useMemo } from 'react';

interface Props {
  caseName: string;
}

const ButtonAddCase = ({ caseName }: Props) => {
  const navigate = useNavigate();

  const notSelectYet = useMemo(() => {
    return caseName === 'Pilih Tipe Kasus';
  }, [caseName]);

  const handleOnClick = () => {
    if (notSelectYet) return;

    switch (caseName) {
      case CASE_LIST[0].title: {
        navigate('/cases/add/ok');
        return;
      }
      case CASE_LIST[1].title: {
        navigate('/cases/add/pacu');
        return;
      }
      case CASE_LIST[2].title: {
        navigate('/cases/add/nora');
        return;
      }
      case CASE_LIST[3].title: {
        navigate('/cases/add/icu');
        return;
      }
      case CASE_LIST[4].title: {
        navigate('/cases/add/resus');
        return;
      }
      case CASE_LIST[5].title: {
        navigate('/cases/add/procedure-consultation');
        return;
      }
      case CASE_LIST[6].title: {
        navigate('/cases/add/poli-perioperative');
        return;
      }
      case CASE_LIST[7].title: {
        navigate('/cases/add/pain-service');
        return;
      }
    }
  };

  return (
    <Button
      variant="outline"
      borderColor={colors.primaryPurple}
      color={colors.primaryPurple}
      borderRadius={10}
      onClick={handleOnClick}
      mb={3}
    >
      {notSelectYet ? (
        <Text as="b">Pilih Tipe Kasus</Text>
      ) : (
        <Text as="b">+ Tambah {caseName}</Text>
      )}
    </Button>
  );
};

export default ButtonAddCase;
