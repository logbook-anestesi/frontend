import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import Ticker from '../../../../components/Ticker';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { PainServiceProcedures as InitialTypes } from '../../../Cases/hooks/useGetCases/types';
import { PainServiceProcedure } from '../../../../hooks/useGetCasesForm/types';
import ModalProcedurePainService from '../ModalProcedurePainService';

interface Props {
  procedurePainServices?: PainServiceProcedure[];
  initialValue?: InitialTypes[];
}

const FormProcedurePainService = ({
  procedurePainServices,
  initialValue,
}: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedProcedurePainService } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [procedurePainService, setProcedurePainService] =
    useState<PainServiceProcedure>();

  useEffect(() => {
    const normalizeProcedurePainService = initialValue?.map(
      (procedurePainService) => {
        return {
          title: procedurePainService.painServiceProcedureName,
          id: procedurePainService?.painServiceProcedureId,
        };
      },
    );

    const normalizeIds = initialValue?.map(
      (procedurePainService) => procedurePainService.painServiceProcedureId,
    );

    approveEditDispatch({
      type: 'set_procedure_pain_service_all',
      data: {
        painServiceProcedures: normalizeProcedurePainService || [],
        painServiceProcedureIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const removeProcedurePainService = useCallback(
    (procedurePainServiceId: string) => {
      approveEditDispatch({
        type: 'remove_type_pain_service',
        data: {
          id: procedurePainServiceId,
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
        Tipe Manajemen Nyeri*
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
        <Text>
          {procedurePainService?.name || 'Masukkan tipe manajemen nyeri'}
        </Text>

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
        {selectedProcedurePainService.map((procedurePainService, idx) => (
          <Ticker
            text={procedurePainService.title}
            onClick={() => removeProcedurePainService(procedurePainService?.id)}
            key={idx}
            isShowClose
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalProcedurePainService
        closeModal={onClose}
        isOpen={isOpen}
        procedurePainServiceList={procedurePainServices || []}
        setProcedurePainService={setProcedurePainService}
      />
    </Flex>
  );
};

export default FormProcedurePainService;
