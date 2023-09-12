import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Tag } from "../../../../hooks/useGetCasesForm/types";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";
import CardASATags from "./CardASATags";
import { useApprovalEditContext } from "../../contexts";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  tagList: Tag[];
  setTag: Dispatch<SetStateAction<Tag | undefined>>;
  onOpenAddOther: () => void;
}

const ModalASATags = ({
  isOpen,
  closeModal,
  tagList,
  setTag,
  onOpenAddOther,
}: Props) => {
  const { selectedASATags } = useApprovalEditContext();
  const [filteredTags, setFilteredTags] = useState(tagList);

  useEffect(() => {
    const filtered = tagList.filter(
      (tag) =>
        !selectedASATags.some((selectedTag) => selectedTag.title === tag?.name)
    );

    setFilteredTags(filtered);
  }, [selectedASATags, tagList]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const loweredFilter = event.target.value.toLowerCase();
    const filtered = tagList.filter((tag) =>
      tag.name.toLowerCase().includes(loweredFilter)
    );

    setFilteredTags(filtered);
  };

  const handleClickAddOther = () => {
    onOpenAddOther();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader pl={2}>Pilih ASA Tags</ModalHeader>
        <ModalCloseButton />

        <InputGroup>
          <Input placeholder="Cari ASA Tag ..." onChange={handleChangeSearch} />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>

        <Box height={3} />

        <Text
          as="u"
          alignSelf="center"
          fontSize="sm"
          color={colors.primaryPurple}
          mb={5}
          onClick={handleClickAddOther}
        >
          Tipe tidak ada di daftar
        </Text>

        <Flex direction="column" maxH={300} overflowY="scroll">
          {filteredTags?.map((tag) => {
            return (
              <CardASATags
                key={tag.id}
                tag={tag}
                closeModal={closeModal}
                setTag={setTag}
              />
            );
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalASATags;
