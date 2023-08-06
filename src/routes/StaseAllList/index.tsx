import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import useGetAllStase from "./hooks/useGetAllStase";
import TableAllStase from "./components/TableAllStase";

const StaseAllList = () => {
  const { loading, staseList } = useGetAllStase();

  return (
    <Flex flexDirection="column">
      <Header pathBack="/stase" title="Stase" />
      <Flex padding="30px" direction="column" gap="16px">
        <TableAllStase staseList={staseList} loading={loading} />
      </Flex>
    </Flex>
  );
};

export default StaseAllList;
