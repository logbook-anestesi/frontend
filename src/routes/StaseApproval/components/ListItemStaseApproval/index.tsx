import { Box, Button, Flex } from '@chakra-ui/react';
import { StaseApproval } from '../../hooks/useGetStaseApprovalList/types';
import CardApproval from '../CardApproval';
import { colors } from '../../../../constants/colors';

interface Props {
  approvalList: StaseApproval[];
  setSelectedStaseId: React.Dispatch<React.SetStateAction<string>>;
  onOpenModal: () => void;
  onOpenModalAll: () => void;
  setStatus: React.Dispatch<
    React.SetStateAction<'APPROVED' | 'REJECTED' | undefined>
  >;
  setStatusBulk: React.Dispatch<React.SetStateAction<'PASSED' | 'FAILED'>>;
}

const ListItemStaseApproval = ({
  approvalList,
  setSelectedStaseId,
  onOpenModal,
  setStatus,
  onOpenModalAll,
  setStatusBulk,
}: Props) => {
  const isHaveOnProgresssApproval = () => {
    const isHaveOnProgress = approvalList.filter(
      (approval) => approval.status === 'IN_PROGRESS',
    );

    return isHaveOnProgress.length > 0;
  };

  return (
    <Flex direction="column" mt={1}>
      {isHaveOnProgresssApproval() && (
        <>
          <Button
            colorScheme="teal"
            backgroundColor={colors.primaryPurple}
            color={colors.white}
            my={5}
            onClick={() => {
              setStatusBulk('PASSED');
              onOpenModalAll();
            }}
          >
            Approve All
          </Button>

          <Button
            variant="outline"
            borderColor={colors.primaryPurple}
            color={colors.primaryPurple}
            mb={5}
            onClick={() => {
              setStatusBulk('FAILED');
              onOpenModalAll();
            }}
          >
            Reject All
          </Button>
        </>
      )}

      {approvalList.map((approval, idx) => (
        <CardApproval
          setSelectedStaseId={setSelectedStaseId}
          approvalData={approval}
          key={`approval-${idx}`}
          onOpenModal={onOpenModal}
          setStatus={setStatus}
        />
      ))}
    </Flex>
  );
};

export default ListItemStaseApproval;
