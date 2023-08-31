import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import useGetDetailKelulusan from "./hooks/useGetDetailKelulusan";
import DetailIlmiah from "./components/DetailIlmiah";
import ModalAddRiwayatDiskusi from "./components/ModalAddRiwayatDiskusi";

const IlmiahDetail = () => {
  const location = useLocation();
  const state = location.state;
  const { detailRiwayatKelulusan } = useGetDetailKelulusan(
    state?.ilmiahId || ""
  );
  const { isOpen, onClose, onOpen } = useDisclosure();

  console.log(detailRiwayatKelulusan);

  return (
    <Flex direction="column">
      <Header title={detailRiwayatKelulusan?.scientificTitle || "-"} />

      <Flex padding="30px" direction="column" gap="16px">
        <DetailIlmiah
          detailIlmiah={detailRiwayatKelulusan}
          onOpenAddRiwayatDiskusi={onOpen}
        />
      </Flex>

      {/* Modal Section */}
      <ModalAddRiwayatDiskusi
        closeModal={onClose}
        isOpen={isOpen}
        detailIlmiah={detailRiwayatKelulusan}
      />
    </Flex>
  );
};

export default IlmiahDetail;
