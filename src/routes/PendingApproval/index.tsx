import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import CardApproval from "./components/CardApproval";
import useGetScientificApprovals from "./hooks/useGetAllApprovals";
import LoaderCircle from "../../components/LoaderCircle";

const PendingApproval = () => {
  const { loading, reviewData } = useGetScientificApprovals();

  return (
    <Flex flexDirection="column">
      <Header title="Pending Approval" />

      <Flex padding="30px" direction="column" gap="16px">
        {loading ? (
          <LoaderCircle />
        ) : (
          reviewData?.map((scientificApproval) => (
            <CardApproval
              scientificData={scientificApproval}
              key={scientificApproval?.id}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default PendingApproval;
