import {
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { OperationCategory } from '../../../../hooks/useGetCasesForm/types';
import CardSubCategory from './CardSubCategory';
import EmptyData from './EmptyData';

export interface SubCategory {
  name: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  operationName: string;
  subCategoryOperation: OperationCategory[];
  onOpenAddSub: () => void;
}

const ModalSubCategory = ({
  isOpen,
  closeModal,
  operationName,
  subCategoryOperation,
  onOpenAddSub,
}: Props) => {
  // const handleClickAddOther = () => {
  //   onOpenAddSub();
  //   closeModal();
  // };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Pilih subkategori dari operasi{' '}
          <Text color={colors.primaryPurple} as="b">
            {operationName}
          </Text>
        </ModalHeader>

        {/* <Text
          as="u"
          alignSelf="center"
          fontSize="sm"
          color={colors.primaryPurple}
          mb={5}
          onClick={handleClickAddOther}
        >
          Tipe tidak ada di daftar
        </Text> */}

        <ModalCloseButton />

        {subCategoryOperation?.length === 0 && <EmptyData />}

        <Flex direction="column" maxH={300} overflowY="scroll">
          {subCategoryOperation?.length > 0 &&
            subCategoryOperation?.map((subCategory) => {
              return (
                <CardSubCategory
                  key={subCategory.id}
                  subCategory={subCategory}
                  closeModal={closeModal}
                  operationName={operationName}
                  id={subCategory.id}
                />
              );
            })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalSubCategory;
