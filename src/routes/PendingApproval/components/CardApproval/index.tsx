import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import profileIcon from '../../assets/profileIcon.png';
import { colors } from '../../../../constants/colors';
import { ReviewItem } from '../../hooks/useGetAllApprovals/types';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

interface Props {
  scientificData: ReviewItem;
  onOpenModal: () => void;
  onCloseModal: () => void;
  setSelectedItemId: React.Dispatch<React.SetStateAction<string>>;
  setStatusApprove: React.Dispatch<React.SetStateAction<string>>;
  setTypeItem: React.Dispatch<
    React.SetStateAction<'ilmiah' | 'exam' | 'graduation'>
  >;
  setResidenName: React.Dispatch<React.SetStateAction<string>>;
}

const CardApproval = ({
  scientificData,
  onOpenModal,
  setSelectedItemId,
  setStatusApprove,
  setTypeItem,
  setResidenName,
}: Props) => {
  const navigate = useNavigate();

  // const handleClickToDetail = () => {
  //   navigate('/cases/details', {
  //     state: { caseId: scientificData?.id },
  //   });
  // };

  const handleClickProfile = () => {
    navigate('/profile/other-user', {
      state: { userId: scientificData?.userId },
    });
  };

  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Flex direction="column" gap={1}>
          <Text as="b">
            {scientificData?.type}: {scientificData?.title}
          </Text>
          <Flex align="center" gap={3}>
            <Image src={profileIcon} alt="" width={3} height={4} />
            <Text
              color={colors.darkGrey}
              fontSize="sm"
              onClick={handleClickProfile}
            >
              {scientificData?.userName}
            </Text>
          </Flex>
        </Flex>

        {/* <ButtonFile
          title={scientificData?.id.substring(0, 10)}
          handleClick={handleClickToDetail}
        /> */}
      </Flex>

      <Flex
        justify="end"
        gap={4}
        onClick={() => setSelectedItemId(scientificData?.id)}
      >
        <Flex
          border="2px"
          borderColor={colors.primaryGreen}
          borderRadius={8}
          padding={1.5}
          onClick={() => {
            setTypeItem('ilmiah');
            setStatusApprove('APPROVED');
            setResidenName(
              `${scientificData.type} - ${scientificData.title} - ${scientificData.userName}`,
            );
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
            setTypeItem('ilmiah');
            setStatusApprove('REJECTED');
            setResidenName(
              `${scientificData.type} - ${scientificData.title} - ${scientificData.userName}`,
            );
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
