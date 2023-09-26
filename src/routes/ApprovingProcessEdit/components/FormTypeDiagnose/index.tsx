import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import Ticker from '../../../../components/Ticker';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { Diagnoses as InitialTypes } from '../../../Cases/hooks/useGetCases/types';
import { Diagnose } from '../../../../hooks/useGetCasesForm/types';
import ModalDiagnoseType from '../ModalDiagnoseType';

interface Props {
  diagnoseList?: Diagnose[];
  initialValue?: InitialTypes[];
}

const FormTypeDiagnose = ({ diagnoseList, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedDiagnose } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [diagnose, setDiagnose] = useState<Diagnose>();

  useEffect(() => {
    const normalizeDiagnose = initialValue?.map((diagnose) => {
      return {
        title: diagnose.diagnoseName,
        id: diagnose?.diagnoseId,
      };
    });

    const normalizeIds = initialValue?.map((diagnose) => diagnose.diagnoseId);

    approveEditDispatch({
      type: 'set_diagnose_type_all',
      data: {
        diagnoses: normalizeDiagnose || [],
        diagnoseIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const removeDiagnose = useCallback(
    (diagnoseid: string) => {
      approveEditDispatch({
        type: 'remove_diagnose',
        data: {
          id: diagnoseid,
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
        Diagnose*
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
        <Text>{diagnose?.name || 'Masukkan nama diagnose ...'}</Text>

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
        {selectedDiagnose.map((diagnose, idx) => (
          <Ticker
            text={diagnose.title}
            onClick={() => removeDiagnose(diagnose?.id)}
            key={idx}
            isShowClose
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalDiagnoseType
        closeModal={onClose}
        isOpen={isOpen}
        diagnoseList={diagnoseList || []}
        setDiagnose={setDiagnose}
      />
    </Flex>
  );
};

export default FormTypeDiagnose;
