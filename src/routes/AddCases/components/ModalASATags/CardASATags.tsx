import { Divider, Flex, Text } from "@chakra-ui/react";
import { Tag } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  tag: Tag;
  closeModal: () => void;
  setTag: Dispatch<SetStateAction<Tag | undefined>>;
}

const CardASATags = ({ tag, closeModal, setTag }: Props) => {
  // const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    // casesDispatch({
    //   type: "set_selected_anesthesia",
    //   data: {
    //     anesthesia: tag.name,
    //   },
    // });

    // casesDispatch({
    //   type: "set_anethesia_type_ids",
    //   data: {
    //     anesthesiaId: tag.id,
    //   },
    // });

    setTag(tag);
    closeModal();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{tag.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardASATags;
