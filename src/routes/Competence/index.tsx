import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import CompetenceCard from "./components/CompetenceCard";
import ButtonTambah from "../../components/ButtonTambah";

const CompetencePage = () => {

    return (
        <Flex flexDirection="column">
        <Header pathBack="/" title="Level Kompetensi" />
        <Flex padding="30px" direction="column" gap="16px">
            <CompetenceCard competenceNumber={1} competenceLevel="Pembekalan" startDate={undefined} endDate={undefined} />
            <CompetenceCard competenceNumber={2} competenceLevel="Pembekalan" startDate={Date.now()} endDate={Date.now()} />
            <CompetenceCard competenceNumber={2} competenceLevel="Pembekalan" startDate={Date.now()} endDate={undefined} />
            <CompetenceCard competenceNumber={3} competenceLevel="Magang" startDate={Date.now()} endDate={Date.now()} />
            <CompetenceCard competenceNumber={4} competenceLevel="Mandiri" startDate={Date.now()} endDate={Date.now()} />
        </Flex>
        <ButtonTambah buttonTitle="Ajukan Kenaikan Kompetensi" />
      </Flex>
    );
};

export default CompetencePage