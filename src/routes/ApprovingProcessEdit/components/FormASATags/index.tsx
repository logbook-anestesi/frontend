import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Tag } from '../../../../hooks/useGetCasesForm/types';
import { useCallback, useEffect, useState } from 'react';
import ModalASATags from '../ModalASATags';
import Ticker from '../../../../components/Ticker';
import ModalAddOtherASAtags from '../ModalAddOtherASATags';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { AsaTag } from '../../../Cases/hooks/useGetCases/types';

interface Props {
  tagList?: Tag[];
  initialValue?: AsaTag[];
}

const FormASATags = ({ tagList, initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedASATags } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const [tag, setTag] = useState<Tag>();

  useEffect(() => {
    const normalizeTags = initialValue?.map((tag) => {
      return {
        title: tag.tagName,
        id: tag.tagId,
      };
    });

    const normalizeIds = initialValue?.map((tag) => tag.tagId);

    approveEditDispatch({
      type: 'set_asa_tags_all',
      data: {
        asaTags: normalizeTags || [],
        tagIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const handleRemoveAsaTag = useCallback(
    (asaTagId: string) => {
      approveEditDispatch({
        type: 'remove_asa_tags',
        data: {
          id: asaTagId,
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
        tagList={tagList || []}
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
