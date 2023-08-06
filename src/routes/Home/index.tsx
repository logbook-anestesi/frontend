import { Flex, useDisclosure } from "@chakra-ui/react";
import HeaderHome from "./components/HeaderHome";
import Profile from "./components/Profile";
import doctorIcon from "../../assets/doctor.png";
import InfoBox from "../../components/InfoBox";
import LevelCard from "./components/LevelCard";
import LevelCardWithLogo from "./components/LevelCardWithLogo";
import ReportCard from "./components/ReportCard";
import cases from "./assets/cases.png";
import exam from "./assets/exam.png";
import ilmiah from "./assets/ilmiah.png";
import ButtonTambah from "../../components/ButtonTambah";
import useGetProfile from "../../hooks/useGetProfile";
import ModalSelectCases from "./components/ModalSelectCases";

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

      <Flex direction="column" gap="10px">
        <InfoBox type="warning" message="Anda memiliki 3 pending approval" />
        <InfoBox
          type="alert"
          message="Anda belum memperbarui stase Maret 2023"
        />
      </Flex>

      <Flex direction="column" gap="10px">
        {profile?.role === "RESIDEN" ? (
          <LevelCard
            title="Pembekalan"
            type="Level Kompetensi"
            path="/competence"
          />
        ) : null}

        {profile?.role === "RESIDEN" ? (
          <LevelCard
            title={profile?.stationName || ""}
            type="Stase"
            path="/stase"
          />
        ) : null}

        {profile?.role === "KONSULEN" ? (
          <LevelCardWithLogo
            title="Cases"
            type="Pending Review"
            path="/review/cases"
            icon={cases}
            cardNumber={1}
          />
        ) : null}

        {profile?.role === "KONSULEN" ? (
          <LevelCardWithLogo
            title="Ilmiah & Exam"
            type="Pending Review"
            path="/stase"
            icon={cases}
            cardNumber={1}
          />
        ) : null}

        {profile?.role === "KETUA_STASE" ? (
          <LevelCardWithLogo
            title="Uro-Gimul"
            type="Dashboard Stase"
            path="/dashboard/station"
            icon={cases}
            cardNumber={1}
          />
        ) : null}
      </Flex>

      <Flex justify="space-between" gap={2}>
        <ReportCard icon={cases} title="Cases" path="/cases" />
        <ReportCard icon={ilmiah} title="Ilmiah" path="/" />
        <ReportCard icon={exam} title="Exam" path="/" />
      </Flex>

      <ButtonTambah buttonTitle="Tambah Cases" onClick={onOpen} />
      <ModalSelectCases closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Home;
