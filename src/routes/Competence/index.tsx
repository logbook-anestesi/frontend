import { Flex, useDisclosure, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonTambah from '../../components/ButtonTambah';
import useGetCompetenceUser from './hooks/useGetCompetenceUser';
import LoaderCircle from '../../components/LoaderCircle';
import ModalPromote from './components/ModalPromote';
import usePostCompetencePromotion from './hooks/usePostCompetencePromotion';
import CardPembekalan from './components/CardPembekalan';
import CardMagang from './components/CardMagang';
import CardMandiri from './components/CardMandiri';

const CompetencePage = () => {
  const { competenceData, loading } = useGetCompetenceUser();
  const {
    isOpen: isOpenConfirm,
    onClose: onCloseConfirm,
    onOpen: onOpenConfirm,
  } = useDisclosure();

  const { postData } = usePostCompetencePromotion();
  const toast = useToast();

  if (loading) return <LoaderCircle />;

  console.log({ competenceData });

  const currentCompetence = competenceData?.find(
    (item) => item.recordFlag === true,
  );

  let promoteTo = '';

  if (currentCompetence?.level === 'PEMBEKALAN') {
    promoteTo = 'MAGANG';
  } else {
    promoteTo = 'MANDIRI';
  }

  const finalData = {
    createBy: currentCompetence?.userId || '',
    userId: currentCompetence?.userId || '',
    promoteTo: promoteTo,
  };

  const handleSubmitData = async () => {
    await postData(finalData).then(() => {
      toast({
        position: 'top',
        status: 'success',
        duration: 2000,
        isClosable: true,
        title: 'Berhasil Kirim Request Kenaikan Kompetensi',
      });
    });
    onCloseConfirm();
  };

  return (
    <Flex flexDirection="column">
      <Header title="Level Kompetensi" />
      <Flex padding="10px 30px" direction="column" gap="16px">
        <CardPembekalan
          startDate={competenceData?.[0]?.created || '-'}
          isDisabled={competenceData?.length < 1}
          isActive={competenceData?.length === 1}
        />
        <CardMagang
          startDate={competenceData?.[1]?.created || '-'}
          isDisabled={competenceData?.length < 2}
          isActive={competenceData?.length === 2}
        />
        <CardMandiri
          startDate={competenceData?.[2]?.created || '-'}
          isDisabled={competenceData?.length < 3}
          isActive={competenceData?.length === 3}
        />

        {competenceData?.length < 3 && (
          <ButtonTambah
            buttonTitle="Ajukan Kenaikan Kompetensi"
            onClick={onOpenConfirm}
          />
        )}
      </Flex>

      <ModalPromote
        isOpen={isOpenConfirm}
        closeModal={onCloseConfirm}
        promoteTo={promoteTo}
        onSubmit={handleSubmitData}
      />
    </Flex>
  );
};

export default CompetencePage;
