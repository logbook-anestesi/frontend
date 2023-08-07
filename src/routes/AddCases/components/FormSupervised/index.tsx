import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import profileIcon from "../../assets/profile.png";
import { useState } from "react";
import { Supervisor } from "../../hooks/useGetSupervisor/types";
import ModalSupervisor from "../ModalSupervisor";
import { useAddCasesContext } from "../../contexts";
import Ticker from "../../../../components/Ticker";
import useGetProfile from "../../../../hooks/useGetProfile";

const FormSupervised = () => {
  const { selectedSupervisor: supervisorList } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedSupervisor, setSelectedSupervisor] = useState<Supervisor>();
  const { profile } = useGetProfile();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      {profile?.competenceName === "PEMBEKALAN" ? (
        <Text fontSize="sm" color={colors.darkGrey}>
          Supervised By
        </Text>
      ) : (
        <Text fontSize="sm" color={colors.darkGrey}>
          Supervising
        </Text>
      )}

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

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {supervisorList.map((supervisor, idx) => (
          <Ticker text={supervisor} key={idx} isShowClose />
        ))}
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
