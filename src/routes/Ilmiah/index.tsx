import { Flex, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import ButtonAdd from "./components/ButtonAdd";
import ModalAddIlmiah from "./components/ModalAddIlmiah";
import TablePengajuanBimbingan from "./components/TablePengajuanPembimbing";
import TablePengajuanKelulusan from "./components/TableRiwayatKelulusan";
import ModalAjukanKelulusan from "./components/ModalAjukanKelulusan";
import TableRiwayatKelulusan from "./components/TableRiwayatKelulusan";

const IlmiahPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAjukanKelulusan,
    onClose: onCloseAjukanKelulusan,
    onOpen: onOpenAjukanKelulusan,
  } = useDisclosure();

  return (
    <Flex direction="column">
      <Header title="Ilmiah" />

      <Flex padding="30px" direction="column" gap="16px">
        <ButtonAdd handleOnClick={onOpen} />

        <TablePengajuanBimbingan onOpenModal={onOpenAjukanKelulusan} />
        <TableRiwayatKelulusan />
      </Flex>

      {/* Modal Section */}
      <ModalAddIlmiah closeModal={onClose} isOpen={isOpen} />
      <ModalAjukanKelulusan
        closeModal={onCloseAjukanKelulusan}
        isOpen={isOpenAjukanKelulusan}
      />
    </Flex>
  );
};

export default IlmiahPage;
