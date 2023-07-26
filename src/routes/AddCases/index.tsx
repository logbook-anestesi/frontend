import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";
import FormDPJP from "./components/FormDPJP";
import FormRadioExam from "./components/FormRadioExam";
import {
  DUMMY_RADIO_ITEM_2,
  DUMMY_RADIO_ITEM_3,
  DUMMY_RADIO_ITEM_4,
  RADIO_EXAM,
} from "./constants";
import FormOperation from "./components/FormOperation";
import AddCasesProvider from "./contexts";
import useGetCasesForm from "./hooks/useGetCasesForm";
import FormTypeAnesthesia from "./components/FormTypeAnesthesia";

const AddCases = () => {
  const { casesForm } = useGetCasesForm();

  return (
    <AddCasesProvider>
      <Flex flexDirection="column">
        <Header pathBack="/cases" title="Tambah OK/Surgery" />

        <Flex padding="30px" direction="column" gap={4}>
          <FormDate />
          <FormDPJP />
          <FormRadioExam title="Merupakan Exam*" listOptions={RADIO_EXAM} />
          <FormRadioExam title="Jenis*" listOptions={DUMMY_RADIO_ITEM_2} />
          <FormRadioExam title="Jenis*" listOptions={DUMMY_RADIO_ITEM_3} />
          <FormRadioExam title="Lokasi*" listOptions={DUMMY_RADIO_ITEM_4} />
          <FormOperation formData={casesForm?.operationTypes || []} />
          <FormTypeAnesthesia
            anesthesiaList={casesForm?.anesthesiaTypes || []}
          />
        </Flex>
      </Flex>
    </AddCasesProvider>
  );
};

export default AddCases;
