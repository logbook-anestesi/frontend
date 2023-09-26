import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import Ticker from '../../../../components/Ticker';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { PainServiceTypes as InitialTypes } from '../../../Cases/hooks/useGetCases/types';
import { PainServiceType } from '../../../../hooks/useGetCasesForm/types';
import ModalTypePainService from '../ModalTypePainService';

interface Props {
  typePainServices?: PainServiceType[];
  initialValue?: InitialTypes[];
}

const FormTypePainService = ({ typePainServices, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedTypePainService } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [typePainService, setTypePainService] = useState<PainServiceType>();

  useEffect(() => {
    const normalizeTypePainService = initialValue?.map((typePainService) => {
      return {
        title: typePainService.painServiceTypeName,
        id: typePainService?.painServiceTypeId,
      };
    });

    const normalizeIds = initialValue?.map(
      (typePainService) => typePainService.painServiceTypeId,
    );

    approveEditDispatch({
      type: 'set_type_pain_service_all',
      data: {
        painServiceTypes: normalizeTypePainService || [],
        painServiceTypeIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const removeTypePainService = useCallback(
    (typePainServiceId: string) => {
      approveEditDispatch({
        type: 'remove_type_pain_service',
        data: {
          id: typePainServiceId,
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
        Type Pain Service*
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
        <Text>{typePainService?.name || 'Masukkan Tipe Pain Service'}</Text>

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
        {selectedTypePainService.map((typePainService, idx) => (
          <Ticker
            text={typePainService.title}
            onClick={() => removeTypePainService(typePainService?.id)}
            key={idx}
            isShowClose
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalTypePainService
        closeModal={onClose}
        isOpen={isOpen}
        typePainServiceList={typePainServices || []}
        setTypePainService={setTypePainService}
      />
    </Flex>
  );
};

export default FormTypePainService;
