import { Divider, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { StaseApproval } from '../../hooks/useGetStaseApprovalList/types';

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
  return (
    <Flex direction="column" mb={3}>
      <Text align="right" color={colors.darkGrey} fontSize="sm">
        30/03 17.00
      </Text>

      <Flex direction="column" gap={3} mb={1}>
        <Text as="b">Dr Ari Angga Nugraha</Text>
      </Flex>

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
