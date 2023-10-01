import { Flex } from '@chakra-ui/react';
import LevelCard from '../LevelCard';
import LevelCardWithLogo from '../LevelCardWithLogo';
import cases from '../../assets/cases.png';
import { Profile } from '../../../../hooks/useGetProfile/types';
import useGetCompetenceUser from '../../../Competence/hooks/useGetCompetenceUser';
import LoaderCircle from '../../../../components/LoaderCircle';
import useGetAllExamApprovals from '../../../PendingApproval/hooks/useGetAllExamApprovals';
import useGetScientificApprovals from '../../../PendingApproval/hooks/useGetAllApprovals';
import useGetPendingReview from '../../../CasesReviewDashboard/hooks/useGetPendingReview';
import LevelCardStaseReview from '../LevelCardStaseReview';

interface Props {
  profile?: Profile;
}

const LevelCardContainer = ({ profile }: Props) => {
  const { notif: notifCases } = useGetPendingReview();
  const { notif: notifExam } = useGetAllExamApprovals();
  const { notif: notifScientific } = useGetScientificApprovals();
  const { competenceData, loading } = useGetCompetenceUser();
  const currentCompetence = competenceData?.find(
    (item) => item.recordFlag === true,
  );

  if (loading) return <LoaderCircle />;

  return (
    <Flex direction="column" gap="10px">
      {profile?.role === 'RESIDEN' ? (
        <LevelCard
          title={currentCompetence?.level || 'test'}
          type="Level Kompetensi"
          path="/competence"
        />
      ) : null}

      {profile?.role === 'RESIDEN' ? (
        <LevelCard
          title={profile?.stationName || ''}
          type="Stase"
          path="/stase"
        />
      ) : null}

      {profile?.role === 'KONSULEN' ? (
        <LevelCardWithLogo
          title="Cases"
          type="Pending Review"
          path="/review/cases"
          icon={cases}
          cardNumber={notifCases}
        />
      ) : null}

      {profile?.role === 'KONSULEN' ? (
        <LevelCardWithLogo
          title="Ilmiah & Exam"
          type="Pending Review"
          path="/approval"
          icon={cases}
          cardNumber={notifExam + notifScientific}
        />
      ) : null}

      {/* KONSULEN or KETUA MODULE ?? */}
      {profile?.role === 'KONSULEN' ? <LevelCardStaseReview /> : null}
    </Flex>
  );
};

export default LevelCardContainer;
