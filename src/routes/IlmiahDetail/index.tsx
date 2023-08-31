import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import useGetDetailKelulusan from "./hooks/useGetDetailKelulusan";
import DetailIlmiah from "./components/DetailIlmiah";

const IlmiahDetail = () => {
  const location = useLocation();
  const state = location.state;
  const { detailRiwayatKelulusan } = useGetDetailKelulusan(
    state?.ilmiahId || ""
  );

  console.log(detailRiwayatKelulusan);

  return (
    <Flex direction="column">
      <Header title={detailRiwayatKelulusan?.scientificTitle || "-"} />

      <Flex padding="30px" direction="column" gap="16px">
        <DetailIlmiah detailIlmiah={detailRiwayatKelulusan} />
      </Flex>
    </Flex>
  );
};

export default IlmiahDetail;
