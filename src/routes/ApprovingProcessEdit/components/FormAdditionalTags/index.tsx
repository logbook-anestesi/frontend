import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Ticker from '../../../../components/Ticker';

import ModalAddAdditionalTags from '../ModalAddAdditionalTags';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { Tag } from '../../../Cases/hooks/useGetCases/types';
import { useEffect } from 'react';

interface Props {
  initialValue?: Tag[];
}

const FormAdditionalTags = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { additionalTags } = useApprovalEditContext();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  useEffect(() => {
    const normalizeTags = initialValue?.map((tag) => tag.tagName);

    const normalizeIds = initialValue?.map((tag) => tag.tagId);

    approveEditDispatch({
      type: 'set_additional_tags_all',
      data: {
        additionalTags: normalizeTags || [],
        additionalTagIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  if (initialValue?.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap={1} onClick={onOpenAddOther}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Additional Tags
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>Masukkan tags ...</Text>

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
        {additionalTags.map((tag, idx) => (
          <Ticker text={tag} key={idx} isShowClose />
        ))}
      </Flex>

      <Text fontSize="3xs" color={colors.darkGrey}>
        Gunakan aditional tags untuk mengelompokkan kasus - kasus tertentu
      </Text>

      {/* Modal Section */}
      <ModalAddAdditionalTags
        isOpen={isOpenAddOther}
        closeModal={onCloseAddOther}
      />
    </Flex>
  );
};

export default FormAdditionalTags;
