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
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChangeEvent, useState } from "react";
import { useAddCasesDispatch } from "../../contexts";
import useAddTags from "../../hooks/useAddTags";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalAddAdditionalTags = ({ isOpen, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const { createTag, loading } = useAddTags();
  const [additionalTag, setAdditionalTag] = useState("");

  const handleCreateAdditionalTag = async () => {
    const response = await createTag({ name: additionalTag });

    casesDispatch({
      type: "set_additional_tags",
      data: {
        tag: additionalTag,
      },
    });

    casesDispatch({
      type: "set_additional_tag_ids",
      data: {
        tagId: response?.tagId,
      },
    });

    closeModal();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalTag(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2} py={4} pr={7}>
          Masukkan tipe operasi lainnya
        </ModalHeader>

        <ModalCloseButton />

        <InputGroup>
          <Input
            placeholder="Masukkan tipe operasi ..."
            onChange={handleChangeInput}
          />
        </InputGroup>

        <Box height={7} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleCreateAdditionalTag}
          isLoading={loading}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddAdditionalTags;