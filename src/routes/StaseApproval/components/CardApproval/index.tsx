import { Divider, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { StaseApproval } from '../../hooks/useGetStaseApprovalList/types';
import { convertDateForNotification } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';

interface Props {
  approvalData: StaseApproval;
  setSelectedStaseId: React.Dispatch<React.SetStateAction<string>>;
  onOpenModal: () => void;
  setStatus: React.Dispatch<
    React.SetStateAction<'APPROVED' | 'REJECTED' | undefined>
  >;
}

const CardApproval = ({
  approvalData,
  setSelectedStaseId,
  onOpenModal,
  setStatus,
}: Props) => {
  const navigate = useNavigate();

  const colorCardProgress = (status: string) => {
    if (status === 'IN_PROGRESS') {
      return colors.primaryPurple;
    }
    if (status === 'PASSED') {
      return colors.primaryGreen;
    }
    if (status === 'FAILED') {
      return colors.primaryRed;
    }

    return colors.primaryPurple;
  };

  const handleClickProfile = () => {
    navigate('/profile/other-user', {
      state: { userId: approvalData.userId },
    });
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        {convertDateForNotification(approvalData.lastUpdated)}
      </Text>

      <Text as="b" onClick={handleClickProfile} textDecor="underline">
        {approvalData.userName}
      </Text>

      <Text
        as="b"
        fontSize="sm"
        borderColor={colorCardProgress(approvalData.status)}
        borderWidth={2}
        color={colorCardProgress(approvalData.status)}
        width="fit-content"
        px={2}
        py={1}
        borderRadius={6}
        mt={2}
      >
        {approvalData.status}
      </Text>

      <Flex justify="end" gap={4}>
        <Flex
          border="2px"
          borderColor={colors.primaryGreen}
          borderRadius={8}
          padding={1.5}
          onClick={() => {
            setStatus('APPROVED');
            setSelectedStaseId(approvalData.id);
            onOpenModal();
          }}
        >
          <CheckIcon color={colors.primaryGreen} />
        </Flex>
        <Flex
          border="2px"
          borderColor={colors.primaryRed}
          borderRadius={8}
          padding={1.5}
          onClick={() => {
            setStatus('REJECTED');
            setSelectedStaseId(approvalData.id);
            onOpenModal();
          }}
        >
          <CloseIcon color={colors.primaryRed} />
        </Flex>
      </Flex>

      <Divider mt={5} />
    </Flex>
  );
};

export default CardApproval;
