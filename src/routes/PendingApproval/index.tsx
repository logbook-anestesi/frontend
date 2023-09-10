import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import CardApproval from "./components/CardApproval";
import useGetScientificApprovals from "./hooks/useGetAllApprovals";
import LoaderCircle from "../../components/LoaderCircle";
import ModalApprove from "./components/ModalApprove";
import { useState } from "react";

const PendingApproval = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, reviewData } = useGetScientificApprovals();
  const [selectedIlmiahId, setSelectedIlmiahId] = useState("");
  const [statusApprove, setStatusApprove] = useState("");

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
              onOpenModal={onOpen}
              onCloseModal={onClose}
              setSelectedIlmiahId={setSelectedIlmiahId}
              setStatusApprove={setStatusApprove}
            />
          ))
        )}
      </Flex>

      {/* Modal Section */}
      <ModalApprove
        closeModal={onClose}
        ilmiahId={selectedIlmiahId}
        isOpen={isOpen}
        statusApprove={statusApprove}
      />
    </Flex>
  );
};

export default PendingApproval;
