import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ProcedureType } from '../../../../hooks/useGetCasesForm/types';
import { useCallback, useEffect, useState } from 'react';
import ModalProcedureType from '../ModalProcedureType';
import Ticker from '../../../../components/Ticker';
import ModalAddOtherTypeProcedure from '../ModalAddOtherTypeProcedure';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { ProcedureType as InitialTypes } from '../../../Cases/hooks/useGetCases/types';

interface Props {
  procedureList?: ProcedureType[];
  initialValue?: InitialTypes[];
}

const FormTypeProcedure = ({ procedureList, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedProcedure } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [procedure, setProcedure] = useState<ProcedureType>();

  useEffect(() => {
    const normalizeProcedure = initialValue?.map((procedure) => {
      return {
        title: procedure.procedureTypeName,
        id: procedure?.procedureTypeId,
      };
    });

    const normalizeIds = initialValue?.map(
      (procedure) => procedure.procedureTypeId,
    );

    approveEditDispatch({
      type: 'set_procedure_type_all',
      data: {
        procedures: normalizeProcedure || [],
        procedureIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const removeProcedure = useCallback(
    (procedureId: string) => {
      approveEditDispatch({
        type: 'remove_procedure_type',
        data: {
          id: procedureId,
        },
      });
    },
    [approveEditDispatch],
  );

  if (initialValue?.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Procedure Yang Dilakukan
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
        procedureList={procedureList || []}
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
