import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useState } from 'react';
import {
  useAddCasesContext,
  useAddCasesDispatch,
} from '../../../AddCases/contexts';
import ModalTypePainService from '../ModalTypePainService';
import Ticker from '../../../../components/Ticker';
import { PainServiceType } from '../../../../hooks/useGetCasesForm/types';
import ModalAddOtherPainType from '../ModalAddOtherPainType';

interface Props {
  painServiceTypes: PainServiceType[];
}

const FormTypePainService = ({ painServiceTypes }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedTypePainService } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [typePainService, setTypePainService] = useState<PainServiceType>();

  const handleRemoveTypePainService = useCallback(
    (typePainId: string) => {
      casesDispatch({
        type: 'remove_type_pain_service',
        data: {
          id: typePainId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Manajemen Nyeri
        <Box as="span">*</Box>
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
          {typePainService?.name || 'Masukkan tipe manajemen nyeri ...'}
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
        {selectedTypePainService.map((typePainService, idx) => (
          <Ticker
            text={typePainService.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveTypePainService(typePainService.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalTypePainService
        closeModal={onClose}
        isOpen={isOpen}
        painServiceTypes={painServiceTypes}
        setTypePainService={setTypePainService}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherPainType
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormTypePainService;
