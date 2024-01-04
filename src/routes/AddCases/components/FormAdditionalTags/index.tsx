import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Ticker from '../../../../components/Ticker';
import { useAddCasesContext, useAddCasesDispatch } from '../../contexts';
import ModalAddAdditionalTags from '../ModalAddAdditionalTags';
import { useCallback } from 'react';

const FormAdditionalTags = () => {
  const casesDispatch = useAddCasesDispatch();
  const { additionalTags } = useAddCasesContext();
  const {
    isOpen: isOpenAddOther,
    onClose: onCloseAddOther,
    onOpen: onOpenAddOther,
  } = useDisclosure();

  const handleRemoveTag = useCallback(
    (tagId: string) => {
      casesDispatch({
        type: 'remove_additional_tags',
        data: {
          id: tagId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tags Lainnya
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        onClick={onOpenAddOther}
        mb={1}
      >
        <Text>Masukkan tags</Text>

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
          <Ticker
            text={tag.title}
            key={idx}
            isShowClose
            onClick={() => handleRemoveTag(tag.id)}
          />
        ))}
      </Flex>

      <Text fontSize="3xs" color={colors.darkGrey}>
        Gunakan 'tags lainnya' untuk mengelompokkan kasus - kasus tertentu
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
