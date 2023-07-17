import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import StaseCard from "./components/StaseCard";
import StaseTable from "./components/StaseTable";
import useGetStaseUser from "./hooks/useGetStaseUser";

const StasePage = () => {
  const { currentStase } = useGetStaseUser();

  return (
    <Flex flexDirection="column">
      <Header onClick={() => {}} title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        <StaseCard staseName={currentStase?.stationName} />
        <StaseTable />
      </Flex>
    </Flex>
  );
};

export default StasePage;
