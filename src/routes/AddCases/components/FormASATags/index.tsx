import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Tag } from '../../../../hooks/useGetCasesForm/types';
import { useCallback, useState } from 'react';
import ModalASATags from '../ModalASATags';
import Ticker from '../../../../components/Ticker';
import { useAddCasesContext, useAddCasesDispatch } from '../../contexts';
import ModalAddOtherASAtags from '../ModalAddOtherASATags';

interface Props {
  tagList: Tag[];
}

const FormASATags = ({ tagList }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedASATags } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [tag, setTag] = useState<Tag>();

  const handleRemoveAsaTag = useCallback(
    (asaTagId: string) => {
      casesDispatch({
        type: 'remove_asa_tags',
        data: {
          id: asaTagId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        ASA Tags
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
        <Text>{tag?.name || 'Masukkan tags ...'}</Text>

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
        {selectedASATags.map((tag, idx) => (
          <Ticker
            text={tag.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveAsaTag(tag.id)}
          />
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalASATags
        closeModal={onClose}
        isOpen={isOpen}
        tagList={tagList}
        setTag={setTag}
        onOpenAddOther={onOpenAddOther}
      />

      <ModalAddOtherASAtags
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormASATags;
