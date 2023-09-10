import { Flex } from "@chakra-ui/react";
import LevelCard from "../LevelCard";
import LevelCardWithLogo from "../LevelCardWithLogo";
import cases from "../../assets/cases.png";
import { Profile } from "../../../../hooks/useGetProfile/types";
import useGetCompetenceUser from "../../../Competence/hooks/useGetCompetenceUser";
import LoaderCircle from "../../../../components/LoaderCircle";

interface Props {
  profile?: Profile;
}

const LevelCardContainer = ({ profile }: Props) => {
  const { competenceData, loading } = useGetCompetenceUser();
  console.log(competenceData);
  const currentCompetence = competenceData?.find(
    (item) => item.recordFlag === true
  );

  if (loading) return <LoaderCircle />;

  return (
    <Flex direction="column" gap="10px">
      {profile?.role === "RESIDEN" ? (
        <LevelCard
          title={currentCompetence?.level || "test"}
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
          path="/approval"
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
  );
};

export default LevelCardContainer;
