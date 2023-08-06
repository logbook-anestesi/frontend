import { Flex } from "@chakra-ui/react";
import InfoBox from "../../../../components/InfoBox";

const InfoBoxContainer = () => {
  return (
    <Flex direction="column" gap="10px">
      <InfoBox type="warning" message="Anda memiliki 3 pending approval" />
      <InfoBox type="alert" message="Anda belum memperbarui stase Maret 2023" />
    </Flex>
  );
};

export default InfoBoxContainer;
