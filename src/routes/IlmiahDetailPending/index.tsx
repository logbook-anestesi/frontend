import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';
import DetailIlmiah from './components/DetailIlmiah';
import ModalAddRiwayatDiskusi from './components/ModalAddRiwayatDiskusi';
import ModalRiwayat from './components/ModalRiwayat';
import useGetDetailIlmiah from './hooks/useGetDetailKelulusan';

const IlmiahDetailPending = () => {
  const location = useLocation();
  const state = location.state;
  const { detailIlmiahPending } = useGetDetailIlmiah(state?.ilmiahId || '');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenListRiwayat,
    onClose: onCloseListRiwayat,
    onOpen: onOpenListRiwayat,
  } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title={detailIlmiahPending?.title || '-'} />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <DetailIlmiah
          detailIlmiah={detailIlmiahPending}
          onOpenAddRiwayatDiskusi={onOpen}
          onOpenListRiwayat={onOpenListRiwayat}
        />
      </Flex>

      {/* Modal Section */}
      <ModalAddRiwayatDiskusi
        closeModal={onClose}
        isOpen={isOpen}
        detailIlmiah={detailIlmiahPending}
      />
      <ModalRiwayat
        isOpen={isOpenListRiwayat}
        closeModal={onCloseListRiwayat}
        riwayat={detailIlmiahPending?.scientificLogs || []}
      />
    </Flex>
  );
};

export default IlmiahDetailPending;
