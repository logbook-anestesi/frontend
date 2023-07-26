import { Button, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";
import FormDPJP from "./components/FormDPJP";
import FormRadioExam from "./components/FormRadioExam";
import { RADIO_EXAM } from "./constants";
import FormOperation from "./components/FormOperation";
import { useAddCasesContext } from "./contexts";
import useGetCasesForm from "./hooks/useGetCasesForm";
import FormTypeAnesthesia from "./components/FormTypeAnesthesia";
import { colors } from "../../constants/colors";

const AddCases = () => {
  const { casesForm } = useGetCasesForm();
  const state = useAddCasesContext();

  const handleSubmitForm = () => {
    console.log("999 INI HASIL AKHIRRRR", state);
  };

  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Tambah OK/Surgery" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadioExam title="Merupakan Exam*" listOptions={RADIO_EXAM} />
        <FormOperation formData={casesForm?.operationTypes || []} />
        <FormTypeAnesthesia anesthesiaList={casesForm?.anesthesiaTypes || []} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleSubmitForm}
          // isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCases;
