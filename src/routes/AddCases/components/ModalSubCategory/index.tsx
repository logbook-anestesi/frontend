import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { DUMMY_SUB_CATEGORY } from "../ModalCategory/dummyCategory";
import CardSubCategory from "./CardSubCategory";

export interface SubCategory {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalSubCategory = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Cari Sub Category..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {DUMMY_SUB_CATEGORY?.map((subCategory) => {
          return (
            <CardSubCategory
              key={subCategory.id}
              subCategory={subCategory}
              // closeModal={closeModal}
              // setSubCategory={setsubCategory}
              // onOpenSub={onOpenSub}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSubCategory;
