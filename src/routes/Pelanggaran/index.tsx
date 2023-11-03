import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from '../../components/Header';
import ButtonAdd from './components/ButtonAdd';
import TableListPelanggaran from './components/TableListPelanggaran';
import { useNavigate } from 'react-router-dom';

const PelanggaranPage = () => {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title="Pelanggaran" />

      <Flex padding="10px 30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={() => navigate('/pelanggaran/add')} />

        <TableListPelanggaran />
      </Flex>

      {/* Modal Section */}
      {/* <ModalAddIlmiah closeModal={onClose} isOpen={isOpen} />
      <ModalAjukanKelulusan
        closeModal={onCloseAjukanKelulusan}
        isOpen={isOpenAjukanKelulusan}
      /> */}
    </Flex>
  );
};

export default PelanggaranPage;
