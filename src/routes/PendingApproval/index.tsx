import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import CardApproval from './components/CardApproval';
import useGetScientificApprovals from './hooks/useGetAllApprovals';
import LoaderCircle from '../../components/LoaderCircle';
import ModalApprove from './components/ModalApprove';
import { useState } from 'react';
import useGetAllExamApprovals from './hooks/useGetAllExamApprovals';
import CardApprovalExam from './components/CardApprovalExam';
import useGetScientificGraduationApprovals from './hooks/useGetGraduationApproval';
import CardApprovalGraduation from './components/CardApprovalGraduation';
import useGetAllDiscussionHistory from './hooks/useGetAllDiscussionHistory';
import CardApprovalDiscussionHistory from './components/CardApprovalDiscussionHistory';
import useGetAllExamPreparation from '../Exam/hooks/useGetAllExamPreparation';
import CardApprovalExamPrep from './components/CardApprovalExamPrep';

const PendingApproval = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, reviewData } = useGetScientificApprovals();
  const { examApprovals, loading: examLoading } = useGetAllExamApprovals();
  const { examPrepList, loading: examPrepLoading } = useGetAllExamPreparation();
  const { discussionHistory, loading: discussHistoryLoading } =
    useGetAllDiscussionHistory();
  const { loading: loadingGraduation, reviewData: graduationReviewData } =
    useGetScientificGraduationApprovals();
  const [selectedItemId, setSelectedItemId] = useState('');
  const [statusApprove, setStatusApprove] = useState('');
  const [residenName, setResidenName] = useState('');
  const [typeItem, setTypeItem] = useState<
    'ilmiah' | 'exam' | 'graduation' | 'discussion'
  >('ilmiah');

  return (
    <Flex flexDirection="column">
      <Header title="Pending Approval" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        {loading ||
        examLoading ||
        loadingGraduation ||
        discussHistoryLoading ||
        examPrepLoading ? (
          <LoaderCircle />
        ) : (
          reviewData?.map((scientificApproval) => (
            <CardApproval
              scientificData={scientificApproval}
              key={scientificApproval?.id}
              onOpenModal={onOpen}
              onCloseModal={onClose}
              setSelectedItemId={setSelectedItemId}
              setStatusApprove={setStatusApprove}
              setTypeItem={setTypeItem}
              setResidenName={setResidenName}
            />
          ))
        )}

        {examApprovals?.map((examApproval) => (
          <CardApprovalExam
            examData={examApproval}
            onCloseModal={onClose}
            onOpenModal={onOpen}
            setSelectedItemId={setSelectedItemId}
            setStatusApprove={setStatusApprove}
            setTypeItem={setTypeItem}
            key={examApproval.id}
            setResidenName={setResidenName}
          />
        ))}

        {examPrepList?.map((examPrepApproval) => (
          <CardApprovalExamPrep
            examData={examPrepApproval}
            onCloseModal={onClose}
            onOpenModal={onOpen}
            setSelectedItemId={setSelectedItemId}
            setStatusApprove={setStatusApprove}
            setTypeItem={setTypeItem}
            key={examPrepApproval.id}
            setResidenName={setResidenName}
          />
        ))}

        {graduationReviewData?.map((graduationApproval) => (
          <CardApprovalGraduation
            onCloseModal={onClose}
            onOpenModal={onOpen}
            scientificData={graduationApproval}
            setSelectedItemId={setSelectedItemId}
            setStatusApprove={setStatusApprove}
            setTypeItem={setTypeItem}
            key={graduationApproval.id}
            setResidenName={setResidenName}
          />
        ))}

        {discussionHistory?.map((discussion) => (
          <CardApprovalDiscussionHistory
            onCloseModal={onClose}
            onOpenModal={onOpen}
            discussHistoryData={discussion}
            setResidenName={setResidenName}
            setSelectedItemId={setSelectedItemId}
            setStatusApprove={setStatusApprove}
            key={discussion.id}
            setTypeItem={setTypeItem}
          />
        ))}
      </Flex>

      {/* If there are no data */}
      {[
        ...(examApprovals || []),
        ...(reviewData || []),
        ...(graduationReviewData || []),
        ...(discussionHistory || []),
      ].length === 0 && (
        <Flex justify="center">
          <Text>Belum ada data approval</Text>
        </Flex>
      )}

      {/* Modal Section */}
      <ModalApprove
        closeModal={onClose}
        itemId={selectedItemId}
        isOpen={isOpen}
        statusApprove={statusApprove}
        typeItem={typeItem}
        residenName={residenName}
      />
    </Flex>
  );
};

export default PendingApproval;
