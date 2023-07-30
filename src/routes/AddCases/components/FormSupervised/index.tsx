import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import profileIcon from "../../assets/profile.png";
import { useState } from "react";
import { Supervisor } from "../../hooks/useGetSupervisor/types";
import ModalSupervisor from "../ModalSupervisor";

const FormSupervised = () => {
  // const casesDispatch = useAddCasesDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedSupervisor, setSelectedSupervisor] = useState<Supervisor>();

  // useEffect(() => {
  //   casesDispatch({
  //     type: "set_dpjp",
  //     data: {
  //       dpjpId: selectedDPJP?.id || "",
  //     },
  //   });
  // }, [casesDispatch, selectedDPJP?.id]);

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Supervised By*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>{selectedSupervisor?.name || "Masukkan Supervisor"}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <ModalSupervisor
        isOpen={isOpen}
        closeModal={onClose}
        setSupervisor={setSelectedSupervisor}
      />
    </Flex>
  );
};

export default FormSupervised;
