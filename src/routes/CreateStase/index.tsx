import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../constants/colors";

import Header from "../../components/Header";
import CardPeriod from "./components/CardPeriod";
import ModalSelectStase from "./components/ModalSelectStase";
import { useMemo, useState } from "react";
import { getCurrentMonth, getMonthYearString } from "../../helpers";
import useAuth from "../../hooks/useAuth";
import useUpdateStase from "./hooks/useUpdateStase";

export interface SelectedStase {
  name: string;
  id: string;
}

const CreateStase = () => {
  const { accountData } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedStase, setSelectedStase] = useState<SelectedStase>();
  const { postData, loading } = useUpdateStase();

  const finalData = useMemo(() => {
    return {
      stationId: selectedStase?.id || "",
      userId: accountData.id,
      periodMmYyyy: getMonthYearString(),
    };
  }, [accountData.id, selectedStase?.id]);

  return (
    <Flex flexDirection="column">
      <Header onClick={() => {}} title="Pembaruan Stase" />

      <Flex padding="30px" direction="column" gap={10}>
        <CardPeriod monthValue={getCurrentMonth()} />

        <Flex gap={2} direction="column">
          <Text color={colors.darkGrey} fontSize="sm">
            Stase yang akan diambil
          </Text>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="6px 10px"
            onClick={onOpen}
          >
            {selectedStase?.name || "Pilih Stase"}
          </Box>
        </Flex>

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          mt={10}
          onClick={() => postData(finalData)}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>

      <ModalSelectStase
        isOpen={isOpen}
        closeModal={onClose}
        onOpen={onOpen}
        setStase={setSelectedStase}
      />
    </Flex>
  );
};

export default CreateStase;
