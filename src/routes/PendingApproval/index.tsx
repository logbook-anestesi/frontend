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

const PendingApproval = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, reviewData } = useGetScientificApprovals();
  const { examApprovals, loading: examLoading } = useGetAllExamApprovals();
  const { loading: loadingGraduation, reviewData: graduationReviewData } =
    useGetScientificGraduationApprovals();
  const [selectedItemId, setSelectedItemId] = useState('');
  const [statusApprove, setStatusApprove] = useState('');
  const [residenName, setResidenName] = useState('');
  const [typeItem, setTypeItem] = useState<'ilmiah' | 'exam' | 'graduation'>(
    'ilmiah',
  );

  return (
    <Flex flexDirection="column">
      <Header title="Pending Approval" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        {loading || examLoading || loadingGraduation ? (
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
      </Flex>

      {/* If there are no data */}
      {[...(examApprovals || []), ...(reviewData || [])].length === 0 && (
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
