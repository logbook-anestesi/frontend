import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import profileIcon from '../../assets/profileIcon.png';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import {
  convertDateForIlmiah,
  convertUnderscoresToSpaces,
} from '../../../../helpers';
import { ExamPreparation } from '../../../Exam/hooks/useGetAllExamPreparation/types';

interface Props {
  examData: ExamPreparation;
  setSelectedItemId: React.Dispatch<React.SetStateAction<string>>;
}

const CardApprovalExamPrep = ({ examData, setSelectedItemId }: Props) => {
  const navigate = useNavigate();

  const handleClickProfile = () => {
    navigate('/profile/other-user', {
      state: { userId: examData?.userId },
    });
  };

  const handleClickApproveProcess = (type: string) => {
    switch (type) {
      case 'DOPS':
        navigate('/exam/approval/dops', {
          state: { examId: examData.id },
        });
        break;
      default:
        console.log('999 belum di implementasi');
    }
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        {convertDateForIlmiah(examData.createdDate)}
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Flex direction="column" gap={1}>
          <Text as="b">Exam: {convertUnderscoresToSpaces(examData?.type)}</Text>
          <Flex align="center" gap={3}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text
              color={colors.darkGrey}
              fontSize="sm"
              onClick={handleClickProfile}
            >
              {examData?.userName}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justify="end"
        gap={4}
        onClick={() => setSelectedItemId(examData?.id)}
      >
        <Button
          colorScheme="teal"
          size="sm"
          onClick={() => handleClickApproveProcess(examData.type)}
        >
          Review
        </Button>
      </Flex>

      <Divider mt={5} />
    </Flex>
  );
};

export default CardApprovalExamPrep;
