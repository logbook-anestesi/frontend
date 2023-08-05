import { Flex } from "@chakra-ui/react";
import HeaderHome from "./components/HeaderHome";
import Profile from "./components/Profile";
import doctorIcon from "../../assets/doctor.png";
import InfoBox from "../../components/InfoBox";
import LevelCard from "./components/LevelCard";
import ReportCard from "./components/ReportCard";
import cases from "./assets/cases.png";
import exam from "./assets/exam.png";
import ilmiah from "./assets/ilmiah.png";
import ButtonTambah from "./components/ButtonTambah";
import useGetProfile from "../../hooks/useGetProfile";

const Home = () => {
  const { loading, profile } = useGetProfile();

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
        <LevelCard
          title="Residen Pembekalan"
          type="Level Kompetensi"
          path="/"
        />
        <LevelCard title="Obgyn" type="Stase" path="/stase" />
      </Flex>

      <Flex justify="space-between" gap="15px">
        <ReportCard icon={cases} title="Cases" path="/cases" />
        <ReportCard icon={ilmiah} title="Ilmiah" path="/" />
        <ReportCard icon={exam} title="Exam" path="/" />
      </Flex>

      <ButtonTambah />
    </Flex>
  );
};

export default Home;
