import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Diagnose } from '../../../../hooks/useGetCasesForm/types';
import ModalDignose from '../ModalDiagnose';
import { useCallback, useState } from 'react';
import {
  useAddCasesContext,
  useAddCasesDispatch,
} from '../../../AddCases/contexts';
import Ticker from '../../../../components/Ticker';
import ModalAddOtherDiagnose from '../ModalAddOtherDiagnose';
// import ModalAddOtherTypeProcedure from "../ModalAddOtherTypeProcedure";

interface Props {
  diagnoseList: Diagnose[];
}

const FormDiagnoses = ({ diagnoseList }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedDiagnose } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [diagnose, setDiagnose] = useState<Diagnose>();

  const handleRemoveDiagnose = useCallback(
    (diagnoseId: string) => {
      casesDispatch({
        type: 'remove_diagnose',
        data: {
          id: diagnoseId,
        },
      });
    },
    [casesDispatch],
  );

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
        <Text>{diagnose?.name || 'Masukkan nama Diagnose ...'}</Text>

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
            key={idx}
            isShowClose
            onClick={() => handleRemoveDiagnose(diagnose.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalDignose
        closeModal={onClose}
        isOpen={isOpen}
        diagnoseList={diagnoseList}
        setDiagnose={setDiagnose}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherDiagnose
        closeModal={onCloseAddOther}
        isOpen={isOpenAddOther}
      />
    </Flex>
  );
};

export default FormDiagnoses;
