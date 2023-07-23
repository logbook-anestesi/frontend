import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import CardTypeProcedure from "./CardTypeProcedure";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  anasthesiaList: AnesthesiaType[];
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
}

const ModalTypeProcedure = ({
  isOpen,
  closeModal,
  anasthesiaList,
  setAnesthesia,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih tipe anestesi</ModalHeader>
        <ModalCloseButton />

        <Box height={3} />

        {anasthesiaList?.map((anasthesia) => {
          return (
            <CardTypeProcedure
              key={anasthesia.id}
              anashtesia={anasthesia}
              closeModal={closeModal}
              setAnesthesia={setAnesthesia}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalTypeProcedure;
