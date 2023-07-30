import { Button, Divider, Flex, Text } from "@chakra-ui/react";
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
import FormTypeProcedure from "./components/FormTypeProcedure";
import FormRadioAgeGroup from "./components/FormRadioAgeGroup";
import FormRadioLocation from "./components/FormRadioLocation";
import FormRadioPriority from "./components/FormRadioPriority";
import FormUsiaAndRM from "./components/FormUsiaAndRM";
import FormRadioGender from "./components/FormRadioGender";
import FormTingkatAndEmergency from "./components/FormTingkatAndEmergency";
import FormASATags from "./components/FormASATags";

const AddCases = () => {
  const { casesForm } = useGetCasesForm();
  const state = useAddCasesContext();

  const handleSubmitForm = () => {
    console.log("999 INI ADALAH HASIL AKHIR FORM", state);
  };

  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Tambah OK/Surgery" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadioExam title="Merupakan Exam*" listOptions={RADIO_EXAM} />
        <FormRadioAgeGroup />
        <FormRadioLocation />
        <FormRadioPriority />
        <FormOperation formData={casesForm?.operationTypes || []} />
        <FormTypeAnesthesia anesthesiaList={casesForm?.anesthesiaTypes || []} />
        <FormTypeProcedure procedureList={casesForm?.procedureTypes || []} />

        <Divider />

        <Text as="b" fontSize="xl">
          Data Pasien
        </Text>

        <FormUsiaAndRM />
        <FormRadioGender />

        <Divider />

        <Text as="b" fontSize="xl">
          ASA
        </Text>

        <FormTingkatAndEmergency />
        <FormASATags tagList={casesForm?.tags || []} />

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
