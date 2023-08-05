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

            { competenceData?.map((item, index) => (
                <CompetenceCard competenceNumber={index+1} competenceLevel={item.level} startDate={item.created} endDate={item.lastUpdated} />
            ))}
            {/* <CompetenceCard competenceNumber={1} competenceLevel="Pembekalan" startDate={undefined} endDate={undefined} />
            <CompetenceCard competenceNumber={2} competenceLevel="Pembekalan" startDate={Date.now()} endDate={Date.now()} />
            <CompetenceCard competenceNumber={2} competenceLevel="Pembekalan" startDate={Date.now()} endDate={undefined} />
            <CompetenceCard competenceNumber={3} competenceLevel="Magang" startDate={Date.now()} endDate={Date.now()} />
            <CompetenceCard competenceNumber={4} competenceLevel="Mandiri" startDate={Date.now()} endDate={Date.now()} /> */}
        </Flex>
        <ButtonTambah buttonTitle="Ajukan Kenaikan Kompetensi" />
      </Flex>
    );
};

export default CompetencePage