import { Flex, useDisclosure } from "@chakra-ui/react";
import HeaderHome from "./components/HeaderHome";
import Profile from "./components/Profile";
import doctorIcon from "../../assets/doctor.png";
import ButtonTambah from "../../components/ButtonTambah";
import useGetProfile from "../../hooks/useGetProfile";
import ModalSelectCases from "./components/ModalSelectCases";
import LevelCardContainer from "./components/LevelCardContainer";
import ReportCardContainer from "./components/ReportCardContainer";
import InfoBoxContainer from "./components/InfoBoxContainer";

const Home = () => {
  const { profile } = useGetProfile();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column" padding="30px" gap="30px">
      <HeaderHome />
      <Profile
        image={profile?.imageUrl || doctorIcon}
        name={profile?.name || "-"}
        term={profile?.joinTerm || "-"}
      />

      <InfoBoxContainer />
      <LevelCardContainer profile={profile} />
      <ReportCardContainer />
      <ButtonTambah buttonTitle="Tambah Cases" onClick={onOpen} />

      {/* Modal Section */}
      <ModalSelectCases closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Home;
