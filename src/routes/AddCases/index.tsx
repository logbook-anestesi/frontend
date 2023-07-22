import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";
import FormDPJP from "./components/FormDPJP";
import FormRadio from "./components/FormRadio";
import {
  DUMMY_RADIO_ITEM_1,
  DUMMY_RADIO_ITEM_2,
  DUMMY_RADIO_ITEM_3,
  DUMMY_RADIO_ITEM_4,
} from "./components/FormRadio/dummyRadio";
import FormCategory from "./components/FormCategory";

const AddCases = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Tambah OK/Surgery" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadio title="Merupakan Exam*" listOptions={DUMMY_RADIO_ITEM_1} />
        <FormRadio title="Jenis*" listOptions={DUMMY_RADIO_ITEM_2} />
        <FormRadio title="Jenis*" listOptions={DUMMY_RADIO_ITEM_3} />
        <FormRadio title="Lokasi*" listOptions={DUMMY_RADIO_ITEM_4} />
        <FormCategory />
      </Flex>
    </Flex>
  );
};

export default AddCases;
