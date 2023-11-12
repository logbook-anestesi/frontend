import { Flex } from '@chakra-ui/react';
import LevelCard from '../LevelCard';
import LevelCardWithLogo from '../LevelCardWithLogo';
import cases from '../../assets/cases.png';
import { Profile } from '../../../../hooks/useGetProfile/types';
import useGetCompetenceUser from '../../../Competence/hooks/useGetCompetenceUser';
import LoaderCircle from '../../../../components/LoaderCircle';
import LevelCardStaseReview from '../LevelCardStaseReview';
import { capitalizeFirstLetter } from '../../../../helpers';
import usetGetCounterNotificationKonsulen from '../../hooks/useReadNotificationsKonsulen';
import usetGetCounterNotificationResiden from '../../hooks/useReadNotificationsResiden';

interface Props {
  profile?: Profile;
}

const LevelCardContainer = ({ profile }: Props) => {
  const { notificationCounterResiden } = usetGetCounterNotificationResiden();
  const { notificationCounter } = usetGetCounterNotificationKonsulen();
  const { competenceData, loading } = useGetCompetenceUser();
  const currentCompetence = competenceData?.find(
    (item) => item.recordFlag === true,
  );

  if (loading) return <LoaderCircle />;

  return (
    <Flex direction="column" gap="10px">
      {profile?.role === 'RESIDEN' ? (
        <LevelCard
          title={
            currentCompetence?.level
              ? `Residen ${capitalizeFirstLetter(currentCompetence.level)}`
              : '-'
          }
          type="Level Kompetensi"
          path="/competence"
        />
      ) : null}

      {profile?.role === 'RESIDEN' ? (
        <LevelCard
          title={
            notificationCounterResiden?.isCurrentMonthStationEntryExist
              ? profile?.stationName
              : ''
          }
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
          cardNumber={notificationCounter?.totalPendingCasesApproval || 0}
        />
      ) : null}

      {profile?.role === 'KONSULEN' ? (
        <LevelCardWithLogo
          title="Ilmiah & Exam"
          type="Pending Review"
          path="/approval"
          icon={cases}
          cardNumber={
            notificationCounter?.totalPendingScientificExamApproval || 0
          }
        />
      ) : null}

      {profile?.role === 'KONSULEN' && (
        <LevelCardWithLogo
          title="Daftar Pelanggaran"
          type=""
          path="/pelanggaran"
          icon={cases}
          cardNumber={0}
        />
      )}

      {/* KONSULEN or KETUA MODULE ?? */}
      {profile?.role === 'KONSULEN' && profile.stationName ? (
        <LevelCardStaseReview staseName={profile.stationName} />
      ) : null}
    </Flex>
  );
};

export default LevelCardContainer;
