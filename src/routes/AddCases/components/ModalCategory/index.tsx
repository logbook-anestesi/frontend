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
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

const ModalCategory = ({ isOpen, closeModal, setCategory }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <InputGroup>
          <Input placeholder="Cari Operasi..." />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        {DUMMY_CATEGORY?.map((category) => {
          return (
            <CardCategory
              key={category.id}
              category={category}
              closeModal={closeModal}
              setCategory={setCategory}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalCategory;
