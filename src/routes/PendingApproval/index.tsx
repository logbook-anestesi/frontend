import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import CardApproval from './components/CardApproval';
import useGetScientificApprovals from './hooks/useGetAllApprovals';
import LoaderCircle from '../../components/LoaderCircle';
import ModalApprove from './components/ModalApprove';
import { useState } from 'react';
import useGetAllExamApprovals from './hooks/useGetAllExamApprovals';
import CardApprovalExam from './components/CardApprovalExam';

const PendingApproval = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, reviewData } = useGetScientificApprovals();
  const { examApprovals, loading: examLoading } = useGetAllExamApprovals();
  const [selectedItemId, setSelectedItemId] = useState('');
  const [statusApprove, setStatusApprove] = useState('');
  const [typeItem, setTypeItem] = useState<'ilmiah' | 'exam'>('ilmiah');

  return (
    <Flex flexDirection="column">
      <Header title="Pending Approval" />

      <Flex padding="30px" direction="column" gap="16px">
        {loading || examLoading ? (
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
            />
          ))
        )}

        {examApprovals.map((examApproval) => (
          <CardApprovalExam
            examData={examApproval}
            onCloseModal={onClose}
            onOpenModal={onOpen}
            setSelectedItemId={setSelectedItemId}
            setStatusApprove={setStatusApprove}
            setTypeItem={setTypeItem}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalApprove
        closeModal={onClose}
        ilmiahId={selectedItemId}
        isOpen={isOpen}
        statusApprove={statusApprove}
        typeItem={typeItem}
      />
    </Flex>
  );
};

export default PendingApproval;
