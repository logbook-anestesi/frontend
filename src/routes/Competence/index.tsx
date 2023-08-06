import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import CompetenceCard from "./components/CompetenceCard";
import ButtonTambah from "../../components/ButtonTambah";
import useGetCompetenceUser from "./hooks/useGetCompetenceUser";
import LoaderCircle from "../../components/LoaderCircle";

const CompetencePage = () => {
  const { competenceData, loading } = useGetCompetenceUser();
  if (loading) return <LoaderCircle />;

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Level Kompetensi" />
      <Flex padding="30px" direction="column" gap="16px">
        {competenceData?.map((item, index) => (
          <CompetenceCard
            competenceNumber={index + 1}
            competenceLevel={item.level}
            startDate={item.created}
            endDate={item.lastUpdated}
          />
        ))}
        <ButtonTambah buttonTitle="Ajukan Kenaikan Kompetensi" />
      </Flex>
    </Flex>
  );
};

export default CompetencePage;
