import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import StaseCard from "./components/StaseCard";
import useGetStaseUser from "./hooks/useGetStaseUser";
import TableTitle from "./components/TableTitle";
import RedStaseCard from "./components/RedStaseCard";
import TableData from "./components/TableData";

const StasePage = () => {
  const { currentStase, staseData, loading } = useGetStaseUser();

  return (
    <Flex flexDirection="column">
      <Header title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        {currentStase ? (
          <StaseCard staseName={currentStase?.stationName} />
        ) : (
          <RedStaseCard />
        )}

        <TableTitle />

        <TableData loading={loading} stationList={staseData || []} />
      </Flex>
    </Flex>
  );
};

export default StasePage;
