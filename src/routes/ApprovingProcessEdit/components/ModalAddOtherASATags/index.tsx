import {
  Box,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useState } from 'react';
import useAddTags from '../../hooks/useAddTags';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddOtherASAtags = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useApprovalEditDispatch();
  const { createTag, loading } = useAddTags();
  const [tag, setTag] = useState('');

  const handleCreateTag = async () => {
    const response = await createTag({ name: tag });
    casesDispatch({
      type: 'set_asa_tags',
      data: {
        id: response?.tagId,
        tag: tag,
      },
    });

    casesDispatch({
      type: 'set_asa_tags_type_ids',
      data: {
        tagId: response?.tagId,
      },
    });

    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan ASA Tag Lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan ASA Tag ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateTag}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddOtherASAtags;
