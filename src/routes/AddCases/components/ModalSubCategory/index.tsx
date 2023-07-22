import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { OperationCategory } from "../../hooks/useGetCasesForm/types";
import CardSubCategory from "./CardSubCategory";

export interface SubCategory {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  operationName: string;
  subCategoryOperation: OperationCategory[];
}

const ModalSubCategory = ({
  isOpen,
  closeModal,
  operationName,
  subCategoryOperation,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Pilih subkategori dari operasi{" "}
          <Text color={colors.primaryPurple} as="b">
            {operationName}
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        {subCategoryOperation?.map((subCategory) => {
          return (
            <CardSubCategory
              key={subCategory.id}
              subCategory={subCategory}
              closeModal={closeModal}
              operationName={operationName}
            />
          );
        })}
      </ModalContent>
    </Modal>
  );
};

export default ModalSubCategory;
