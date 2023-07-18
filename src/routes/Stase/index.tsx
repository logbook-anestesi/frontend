import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import StaseCard from "./components/StaseCard";
import useGetStaseUser from "./hooks/useGetStaseUser";
import TableTitle from "./components/StaseTable";
import TableComponent from "./components/TableComponent";
import RedStaseCard from "./components/RedStaseCard";

const StasePage = () => {
  const { currentStase, staseData, loading } = useGetStaseUser();

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        {currentStase ? (
          <StaseCard staseName={currentStase?.stationName} />
        ) : (
          <RedStaseCard />
        )}

        <TableTitle />

        <TableComponent staseData={staseData} loading={loading} />
      </Flex>
    </Flex>
  );
};

export default StasePage;
