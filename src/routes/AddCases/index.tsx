import { Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

const AddCases = () => {
  const { type } = useParams();

  console.log("999 ini type", type);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Pembaruan Stase" />

      <Flex padding="30px" direction="column" gap={10}>
        <Text>Add Cases</Text>
      </Flex>
    </Flex>
  );
};

export default AddCases;
