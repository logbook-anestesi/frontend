import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../constants/colors";

import Header from "../../components/Header";
import CardPeriod from "./components/CardPeriod";
import ModalSelectStase from "./components/ModalSelectStase";
import { useMemo, useState } from "react";
import { getCurrentMonth, getMonthYearString } from "../../helpers";
import useAuth from "../../hooks/useAuth";
import useUpdateStase from "./hooks/useUpdateStase";
import { useNavigate } from "react-router-dom";

export interface SelectedStase {
  name: string;
  id: string;
}

const CreateStase = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { accountData } = useAuth();
  const { postData, loading } = useUpdateStase();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedStase, setSelectedStase] = useState<SelectedStase>();

  const finalData = useMemo(() => {
    return {
      stationId: selectedStase?.id || "",
      userId: accountData.id,
      periodMmYyyy: getMonthYearString(),
    };
  }, [accountData.id, selectedStase?.id]);

  const handleSubmitData = async () => {
    await postData(finalData).then((response) => {
      if (response?.success) {
        toast({
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
          title: "Berhasil Update Stase",
        });

        navigate("/stase");
      } else {
        toast({
          position: "top",
          status: "error",
          duration: 2000,
          isClosable: true,
          title: "Gagal Update Stase",
          description: response?.message,
        });
      }
    });
  };

  return (
    <Flex flexDirection="column">
      <Header pathBack="/stase" title="Pembaruan Stase" />

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
          onClick={handleSubmitData}
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
