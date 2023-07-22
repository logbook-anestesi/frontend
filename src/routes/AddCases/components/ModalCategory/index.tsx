import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { DUMMY_CATEGORY } from "./dummyCategory";
import CardCategory from "./CardCategory";
import { Dispatch, SetStateAction } from "react";

export interface Category {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onOpenSub: () => void;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

const ModalCategory = ({
  isOpen,
  closeModal,
  setCategory,
  onOpenSub,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih kategori tipe operasi</ModalHeader>
        <ModalCloseButton />

        <Box height={3} />

        {DUMMY_CATEGORY?.map((category) => {
          return (
            <CardCategory
              key={category.id}
              category={category}
              closeModal={closeModal}
              setCategory={setCategory}
              onOpenSub={onOpenSub}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalCategory;
