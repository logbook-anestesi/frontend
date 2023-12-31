import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import profileIcon from '../../assets/profileIcon.png';
import { colors } from '../../../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { ExamApproval } from '../../hooks/useGetAllExamApprovals/types';
import {
  convertDateForIlmiah,
  convertUnderscoresToSpaces,
} from '../../../../helpers';

interface Props {
  examData: ExamApproval;
  onOpenModal: () => void;
  onCloseModal: () => void;
  setSelectedItemId: React.Dispatch<React.SetStateAction<string>>;
  setStatusApprove: React.Dispatch<React.SetStateAction<string>>;
  setTypeItem: React.Dispatch<
    React.SetStateAction<'ilmiah' | 'exam' | 'graduation' | 'discussion'>
  >;
  setResidenName: React.Dispatch<React.SetStateAction<string>>;
}

const CardApprovalExam = ({
  examData,
  onOpenModal,
  setSelectedItemId,
  setStatusApprove,
  setTypeItem,
  setResidenName,
}: Props) => {
  const navigate = useNavigate();

  // const handleClickToDetail = () => {
  //   navigate('/cases/details', {
  //     state: { caseId: examData?.id },
  //   });
  // };

  const handleClickProfile = () => {
    navigate('/profile/other-user', {
      state: { userId: examData?.userId },
    });
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        {convertDateForIlmiah(examData.created)}
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
        <Flex
          border="2px"
          borderColor={colors.primaryGreen}
          borderRadius={8}
          padding={1.5}
          onClick={() => {
            setTypeItem('exam');
            setStatusApprove('APPROVED');
            setResidenName(`${examData.type} - ${examData.userName}`);
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
            setTypeItem('exam');
            setStatusApprove('REJECTED');
            setResidenName(`${examData.type} - ${examData.userName}`);
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

export default CardApprovalExam;
