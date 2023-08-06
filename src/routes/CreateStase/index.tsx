import { Button, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { colors } from "../../constants/colors";

import Header from "../../components/Header";
import CardPeriod from "./components/CardPeriod";
import ModalSelectStase from "./components/ModalSelectStase";
import { useMemo, useState } from "react";
import { getCurrentMonth, getMonthYearString } from "../../helpers";
import useAuth from "../../hooks/useAuth";
import useUpdateStase from "./hooks/useUpdateStase";
import { useNavigate } from "react-router-dom";
import ModalConfirmUpdate from "./components/ModalConfirmUpdate";
import StaseDropdown from "./components/StaseDropdown";
import { Stase } from "./hooks/useGetAllStase/types";

export interface SelectedStase {
  name: string;
  id: string;
  lecturer: string;
}

const CreateStase = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { accountData } = useAuth();
  const { postData, loading } = useUpdateStase();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onClose: onCloseConfirm,
    onOpen: onOpenConfirm,
  } = useDisclosure();
  const [selectedStase, setSelectedStase] = useState<Stase>();

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

        <StaseDropdown onOpen={onOpen} selectedStase={selectedStase} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          mt={5}
          onClick={onOpenConfirm}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>

      {/* All modal is below */}
      <ModalSelectStase
        isOpen={isOpen}
        closeModal={onClose}
        setStase={setSelectedStase}
      />

      <ModalConfirmUpdate
        isOpen={isOpenConfirm}
        closeModal={onCloseConfirm}
        selectedStase={selectedStase?.stationName}
        onSubmit={handleSubmitData}
      />
    </Flex>
  );
};

export default CreateStase;
