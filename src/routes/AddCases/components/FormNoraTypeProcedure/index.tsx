import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NoraProcedureType } from '../../../../hooks/useGetCasesForm/types';
import { useCallback, useState } from 'react';
import ModalNoraProcedureType from '../ModalNoraProcedureType';
import Ticker from '../../../../components/Ticker';
import { useAddCasesContext, useAddCasesDispatch } from '../../contexts';
import ModalAddOtherNoraType from '../ModalAddOtherNoraType';

interface Props {
  noraProcedureList: NoraProcedureType[];
}

const FormNoraTypeProcedure = ({ noraProcedureList }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedNoraProcedure } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [noraProcedure, setNoraProcedure] = useState<NoraProcedureType>();

  const handleRemoveAsaTag = useCallback(
    (noraId: string) => {
      casesDispatch({
        type: 'remove_nora_procedure',
        data: {
          id: noraId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Prosedur NORA*
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
        <Text>{noraProcedure?.name || 'Masukkan nama prosedur ...'}</Text>

        <ChevronRightIcon boxSize={7} />
      </Flex>

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {selectedNoraProcedure.map((noraProcedure, idx) => (
          <Ticker
            text={noraProcedure.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveAsaTag(noraProcedure.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalNoraProcedureType
        closeModal={onClose}
        isOpen={isOpen}
        noraProcedureList={noraProcedureList}
        setNoraProcedure={setNoraProcedure}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherNoraType
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormNoraTypeProcedure;
