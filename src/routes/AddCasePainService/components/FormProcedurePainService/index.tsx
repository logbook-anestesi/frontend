import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useState } from 'react';
import {
  useAddCasesContext,
  useAddCasesDispatch,
} from '../../../AddCases/contexts';
import Ticker from '../../../../components/Ticker';
import { PainServiceProcedure } from '../../../../hooks/useGetCasesForm/types';
import ModalProcedurePainService from '../ModalProcedurePainService';
import ModalAddOtherPainProcedure from '../ModalAddOtherPainProcedure';

interface Props {
  painServiceProcedure: PainServiceProcedure[];
}

const FormProcedurePainService = ({ painServiceProcedure }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedProcedurePainService } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [procedurePainService, setProcedurePainService] =
    useState<PainServiceProcedure>();

  const handleRemoveProcedurePainService = useCallback(
    (procedurePainId: string) => {
      casesDispatch({
        type: 'remove_procedure_pain_service',
        data: {
          id: procedurePainId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Prosedur Manajemen Nyeri
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
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
          {procedurePainService?.name ||
            'Masukkan prosedur manajemen nyeri ...'}
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
            key={idx}
            isShowClose
            onClick={() =>
              handleRemoveProcedurePainService(procedurePainService.id)
            }
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalProcedurePainService
        closeModal={onClose}
        isOpen={isOpen}
        procedurePainService={painServiceProcedure}
        setProcedurePainService={setProcedurePainService}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherPainProcedure
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormProcedurePainService;
