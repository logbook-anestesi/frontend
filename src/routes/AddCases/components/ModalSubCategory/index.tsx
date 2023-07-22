import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { DUMMY_SUB_CATEGORY } from "../ModalCategory/dummyCategory";
import CardSubCategory from "./CardSubCategory";
import { colors } from "../../../../constants/colors";

export interface SubCategory {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  category: string;
}

const ModalSubCategory = ({ isOpen, closeModal, category }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Pilih subkategori dari operasi{" "}
          <Text color={colors.primaryPurple} as="b">
            {category}
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        {DUMMY_SUB_CATEGORY?.map((subCategory) => {
          return (
            <CardSubCategory
              key={subCategory.id}
              subCategory={subCategory}
              closeModal={closeModal}
              category={category}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSubCategory;
