import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';
import useGetDetailKelulusan from './hooks/useGetDetailKelulusan';
import DetailIlmiah from './components/DetailIlmiah';
import ModalAddRiwayatDiskusi from './components/ModalAddRiwayatDiskusi';
import RiwayatDiskusi from './components/RiwayatDiskusi';
import ModalRiwayat from './components/ModalRiwayat';

const IlmiahDetail = () => {
  const location = useLocation();
  const state = location.state;
  const { detailRiwayatKelulusan } = useGetDetailKelulusan(
    state?.ilmiahId || '',
  );
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenListRiwayat,
    onClose: onCloseListRiwayat,
    onOpen: onOpenListRiwayat,
  } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title={detailRiwayatKelulusan?.scientificTitle || '-'} />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <DetailIlmiah
          detailIlmiah={detailRiwayatKelulusan}
          onOpenAddRiwayatDiskusi={onOpen}
          onOpenListRiwayat={onOpenListRiwayat}
        />

        <RiwayatDiskusi
          riwayatDiskusi={detailRiwayatKelulusan?.discussionHistories || []}
        />
      </Flex>

      {/* Modal Section */}
      <ModalAddRiwayatDiskusi
        closeModal={onClose}
        isOpen={isOpen}
        detailIlmiah={detailRiwayatKelulusan}
      />
      <ModalRiwayat
        isOpen={isOpenListRiwayat}
        closeModal={onCloseListRiwayat}
        riwayat={detailRiwayatKelulusan?.scientificLogs || []}
      />
    </Flex>
  );
};

export default IlmiahDetail;
