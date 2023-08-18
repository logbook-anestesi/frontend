import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ModalAnesthesiType from "../ModalAnesthesiType";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { useCallback, useState } from "react";
import ModalAddOtherAnesthesia from "../ModalAddOtherAnesthesia";
import { useAddCasesContext, useAddCasesDispatch } from "../../contexts";
import Ticker from "../../../../components/Ticker";

interface Props {
  anesthesiaList: AnesthesiaType[];
}

const FormTypeAnesthesia = ({ anesthesiaList }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedAnesthesia } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [anesthesia, setAnesthesia] = useState<AnesthesiaType>();

  const handleRemoveAnesthesia = useCallback(
    (anesthesiaId: string) => {
      casesDispatch({
        type: "remove_anesthesia_type",
        data: {
          id: anesthesiaId,
        },
      });
    },
    [casesDispatch]
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Anastesi*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        onClick={onOpen}
        mb={1}
      >
        <Text>{anesthesia?.name || "Masukkan tipe anastesi ..."}</Text>

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
        {selectedAnesthesia.map((anesthesia, idx) => (
          <Ticker
            text={anesthesia.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveAnesthesia(anesthesia.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalAnesthesiType
        closeModal={onClose}
        isOpen={isOpen}
        anesthesiaList={anesthesiaList}
        setAnesthesia={setAnesthesia}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherAnesthesia
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormTypeAnesthesia;
