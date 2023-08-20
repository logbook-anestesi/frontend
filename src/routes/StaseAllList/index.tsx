import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetAllStase from "./hooks/useGetAllStase";
import TableData from "./components/TableData";

const StaseAllList = () => {
  const { loading, staseList } = useGetAllStase();

  return (
    <Flex flexDirection="column">
      <Header title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        <TableData loading={loading} stationList={staseList || []} />
      </Flex>
    </Flex>
  );
};

export default StaseAllList;
