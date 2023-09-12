import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ProcedureType } from '../../../../hooks/useGetCasesForm/types';
import { useCallback, useState } from 'react';
import ModalProcedureType from '../ModalProcedureType';
import Ticker from '../../../../components/Ticker';
import { useAddCasesContext, useAddCasesDispatch } from '../../contexts';
import ModalAddOtherTypeProcedure from '../ModalAddOtherTypeProcedure';

interface Props {
  procedureList: ProcedureType[];
}

const FormTypeProcedure = ({ procedureList }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedProcedure } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [procedure, setProcedure] = useState<ProcedureType>();

  const removeProcedure = useCallback(
    (procedureId: string) => {
      casesDispatch({
        type: 'remove_procedure_type',
        data: {
          id: procedureId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Procedure Done*
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
        <Text>{procedure?.name || 'Masukkan nama prosedur ...'}</Text>

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
        {selectedProcedure.map((procedure, idx) => (
          <Ticker
            text={procedure.title}
            onClick={() => removeProcedure(procedure?.id)}
            key={idx}
            isShowClose
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalProcedureType
        closeModal={onClose}
        isOpen={isOpen}
        procedureList={procedureList}
        setProcedure={setProcedure}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherTypeProcedure
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormTypeProcedure;
