import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import StaseCard from "./components/StaseCard";
import StaseTable from "./components/StaseTable";

const StasePage = () => {
  return (
    <div>
      <Header onClick={() => {}} title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        <StaseCard />
        <StaseTable />
      </Flex>
    </div>
  );
};

export default StasePage;
