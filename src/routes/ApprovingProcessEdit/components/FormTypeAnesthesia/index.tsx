import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ModalAnesthesiType from '../ModalAnesthesiType';
import { AnesthesiaType } from '../../../../hooks/useGetCasesForm/types';
import { AnesthesiaType as InitialTypes } from '../../../Cases/hooks/useGetCases/types';
import { useCallback, useEffect, useState } from 'react';
import ModalAddOtherAnesthesia from '../ModalAddOtherAnesthesia';
import Ticker from '../../../../components/Ticker';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';

interface Props {
  anesthesiaList?: AnesthesiaType[];
  initialValue?: InitialTypes[];
}

const FormTypeAnesthesia = ({ anesthesiaList, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedAnesthesia } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [anesthesia, setAnesthesia] = useState<AnesthesiaType>();

  useEffect(() => {
    const normalizedAnesthesia = initialValue?.map((anesthesia) => {
      return {
        title: anesthesia.anesthesiaTypeName,
        id: anesthesia.anesthesiaTypeId,
      };
    });

    const normalizeIds = initialValue?.map(
      (anesthesia) => anesthesia.anesthesiaTypeId,
    );

    approveEditDispatch({
      type: 'set_anesthesia_type_all',
      data: {
        anesthesia: normalizedAnesthesia || [],
        anesthesiaIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const handleRemoveAnesthesia = useCallback(
    (anesthesiaId: string) => {
      approveEditDispatch({
        type: 'remove_anesthesia_type',
        data: {
          id: anesthesiaId,
        },
      });
    },
    [approveEditDispatch],
  );

  if (initialValue?.length === 0) {
    return <></>;
  }

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Anestesi
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
        <Text>{anesthesia?.name || 'Masukkan tipe anestesi ...'}</Text>

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
        anesthesiaList={anesthesiaList || []}
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
