import { Button, Flex } from '@chakra-ui/react';
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
}

const ListItemStaseApproval = ({
  approvalList,
  setSelectedStaseId,
  onOpenModal,
  setStatus,
  onOpenModalAll,
}: Props) => {
  return (
    <Flex direction="column">
      <Button
        colorScheme="teal"
        backgroundColor={colors.primaryPurple}
        color={colors.white}
        my={5}
        onClick={onOpenModalAll}
      >
        Approve All
      </Button>

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
