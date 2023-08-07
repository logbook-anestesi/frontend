import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Tag } from "../../hooks/useGetCasesForm/types";
import { useState } from "react";
import ModalASATags from "../ModalASATags";
import Ticker from "../../../../components/Ticker";
import { useAddCasesContext } from "../../contexts";
import ModalAddOtherASAtags from "../ModalAddOtherASATags";

interface Props {
  tagList: Tag[];
}

const FormASATags = ({ tagList }: Props) => {
  const { selectedASATags } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [tag, setTag] = useState<Tag>();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        ASA Tags
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
        <Text>{tag?.name || "Masukkan tags ..."}</Text>

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
        {selectedASATags.map((tag, idx) => (
          <Ticker text={tag} key={idx} isShowClose />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalASATags
        closeModal={onClose}
        isOpen={isOpen}
        tagList={tagList}
        setTag={setTag}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherASAtags
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormASATags;
