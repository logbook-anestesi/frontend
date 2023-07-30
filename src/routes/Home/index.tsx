import { Flex } from "@chakra-ui/react";
import HeaderHome from "./components/HeaderHome";
import Profile from "./components/Profile";
import dummyProfileImage from "../../assets/dummyPhotoProfile.png";
import InfoBox from "../../components/InfoBox";
import LevelCard from "./components/LevelCard";
import LevelCardWithLogo from "./components/LevelCardWithLogo";
import ReportCard from "./components/ReportCard";
import cases from "./assets/cases.png";
import exam from "./assets/exam.png";
import ilmiah from "./assets/ilmiah.png";
import ButtonTambah from "../../components/ButtonTambah";

const Home = () => {
  return (
    <Flex direction="column" padding="30px" gap="30px">
      <HeaderHome />
      <Profile
        image={dummyProfileImage}
        name="dr. Jessica Mila Agnesia"
        term="Term 2022 / 1"
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
          title="Pembekalan"
          type="Level Kompetensi"
          path="/competence"
        />
        <LevelCard title="Obgyn" type="Stase" path="/stase" />
        <LevelCardWithLogo title="Cases" type="Pending Review" path="/review/cases" icon={cases} cardNumber={1}/>
        <LevelCardWithLogo title="Ilmiah & Exam" type="Pending Review" path="/stase" icon={cases} cardNumber={1}/>
        <LevelCardWithLogo title="Uro-Gimul" type="Dashboard Stase" path="/dashboard/station" icon={cases} cardNumber={1}/>
      </Flex>

      <Flex justify="space-between" gap="15px">
        <ReportCard icon={cases} title="Cases" path="/cases" />
        <ReportCard icon={ilmiah} title="Ilmiah" path="/" />
        <ReportCard icon={exam} title="Exam" path="/" />
      </Flex>

      <ButtonTambah buttonTitle="Tambah Cases" />
    </Flex>
  );
};

export default Home;
