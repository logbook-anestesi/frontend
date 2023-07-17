import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import StaseCard from "./components/StaseCard";
import useGetStaseUser from "./hooks/useGetStaseUser";
import TableTitle from "./components/StaseTable";
import TableComponent from "./components/TableComponent";

const StasePage = () => {
  const { currentStase, staseData } = useGetStaseUser();

  return (
    <Flex flexDirection="column">
      <Header pathBack="/" title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        <StaseCard staseName={currentStase?.stationName} />
        <TableTitle />
        <TableComponent staseData={staseData} />
      </Flex>
    </Flex>
  );
};

export default StasePage;
