import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Ticker from "../../../../components/Ticker";
import ModalCategory, { Category } from "../ModalCategory";
import { useState } from "react";
import ModalSubCategory from "../ModalSubCategory";

const FormOperasi = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSub,
    onClose: onCloseSub,
    onOpen: onOpenSub,
  } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Operasi*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>{selectedCategory?.name || "Tambah Tipe Operasi"}</Text>

        <ChevronRightIcon boxSize={7} />
      </Flex>

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Ticker text="Ortho: Spine Surgery" />
        <Ticker text="Obgyn: SC" />
      </Flex>

      {/* Modal */}
      <ModalCategory
        closeModal={onClose}
        isOpen={isOpen}
        onOpenSub={onOpenSub}
        setCategory={setSelectedCategory}
      />

      <ModalSubCategory closeModal={onCloseSub} isOpen={isOpenSub} />
    </Flex>
  );
};

export default FormOperasi;
