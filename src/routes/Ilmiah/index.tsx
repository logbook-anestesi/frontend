import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import ModalAddIlmiah from './components/ModalAddIlmiah';
import TablePengajuanBimbingan from './components/TablePengajuanPembimbing';
import ModalAjukanKelulusan from './components/ModalAjukanKelulusan';
import TableRiwayatKelulusan from './components/TableRiwayatKelulusan';
import ModalSeeMore from './components/ModalSeeMore';
import { useState } from 'react';
import { ScientificLog } from './hooks/useGetPengajuanPembimbing/types';

const IlmiahPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSeeMore,
    onClose: onCloseSeeMore,
    onOpen: onOpenSeeMore,
  } = useDisclosure();
  const [selectedHistory, setSelectedHistory] = useState<ScientificLog[]>([]);

  const {
    isOpen: isOpenAjukanKelulusan,
    onClose: onCloseAjukanKelulusan,
    onOpen: onOpenAjukanKelulusan,
  } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title="Ilmiah" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={onOpen} />

        <TablePengajuanBimbingan
          onOpenModal={onOpenAjukanKelulusan}
          setSelectedHistory={setSelectedHistory}
          onOpenSeeMore={onOpenSeeMore}
        />
        <TableRiwayatKelulusan
          onOpenSeeMore={onOpenSeeMore}
          setSelectedHistory={setSelectedHistory}
        />
      </Flex>

      {/* Modal Section */}
      <ModalAddIlmiah closeModal={onClose} isOpen={isOpen} />
      <ModalAjukanKelulusan
        closeModal={onCloseAjukanKelulusan}
        isOpen={isOpenAjukanKelulusan}
      />
      <ModalSeeMore
        closeModal={onCloseSeeMore}
        isOpen={isOpenSeeMore}
        historyList={selectedHistory}
      />
    </Flex>
  );
};

export default IlmiahPage;
