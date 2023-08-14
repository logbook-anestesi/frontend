import { Flex, useDisclosure, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";
import CompetenceCard from "./components/CompetenceCard";
import ButtonTambah from "../../components/ButtonTambah";
import useGetCompetenceUser from "./hooks/useGetCompetenceUser";
import LoaderCircle from "../../components/LoaderCircle";
import ModalPromote from "./components/ModalPromote";
import usePostCompetencePromotion from "./hooks/usePostCompetencePromotion";
// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";

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

  const currentCompetence = competenceData?.find(
    (item) => item.recordFlag === true
  );

  let promoteTo = "";

  if (currentCompetence?.level === "PEMBEKALAN") {
    promoteTo = "MAGANG";
  } else {
    promoteTo = "MANDIRI";
  }

  const finalData = {
    createBy: currentCompetence?.userId || "",
    userId: currentCompetence?.userId || "",
    promoteTo: promoteTo,
  };

  // const finalData = useMemo(() => {
  //   return {
  //     createBy: currentCompetence?.userId || "",
  //     userId: currentCompetence?.userId || "",
  //     promoteTo: promoteTo,
  //   };
  // }, [currentCompetence?.userId, currentCompetence?.userId]);

  const handleSubmitData = async () => {
    await postData(finalData).then((response) => {
      toast({
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
        title: "Berhasil Kirim Request Kenaikan Kompetensi",
      });
    });
    onCloseConfirm();
  };

  return (
    <Flex flexDirection="column">
      <Header title="Level Kompetensi" />
      <Flex padding="30px" direction="column" gap="16px">
        {competenceData?.map((item, index) => (
          <CompetenceCard
            competenceNumber={index + 1}
            competenceLevel={item.level}
            startDate={item.created}
            endDate={item.lastUpdated}
          />
        ))}
        <ButtonTambah
          buttonTitle="Ajukan Kenaikan Kompetensi"
          onClick={onOpenConfirm}
        />
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
