import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import profileIcon from '../../assets/profileIcon.png';
import { colors } from '../../../../constants/colors';
import ButtonFile from '../ButtonFile';
import CardApprovalButton from '../CardApprovalButton';
import { ReviewItem } from '../../hooks/useGetPendingReview/types';
import { convertDateForNotification } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';

interface Props {
  caseData: ReviewItem;
  onClick: (caseId: string) => void;
}

const CardApproval = ({ caseData, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClickProfile = () => {
    navigate('/profile/other-user', {
      state: { userId: caseData.userId },
    });
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        {convertDateForNotification(caseData?.date)}
      </Text>

      <Flex direction="column" gap={3} mb={8}>
        <Flex direction="column">
          <Text as="b" mb={1}>
            Cases: {caseData.caseType}
          </Text>
          <Flex align="center" gap={2} onClick={handleClickProfile}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text color={colors.darkGrey} fontSize="sm">
              {caseData?.userName}
            </Text>
          </Flex>
        </Flex>

        <ButtonFile
          title={`${caseData?.caseType} - ${caseData?.id.substring(0, 4)}`}
          caseId={caseData?.id}
        />
      </Flex>

      <CardApprovalButton caseData={caseData} onClick={onClick} />

      <Divider mt={5} />
    </Flex>
  );
};

export default CardApproval;
