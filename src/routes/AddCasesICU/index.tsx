import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "../AddCases/components/FormDate";
import FormDPJP from "../AddCases/components/FormDPJP";
import FormRadioAgeGroup from "../AddCases/components/FormRadioAgeGroup";
import FormOperation from "../AddCases/components/FormOperation";
import FormUsiaAndRM from "../AddCases/components/FormUsiaAndRM";
import FormRadioGender from "../AddCases/components/FormRadioGender";
import FormTingkatAndEmergency from "../AddCases/components/FormTingkatAndEmergency";
import FormNotes from "../AddCases/components/FormNotes";
import { colors } from "../../constants/colors";
import { useAddCasesDispatch } from "../AddCases/contexts";
import { useEffect } from "react";
import useGetCasesForm from "../AddCases/hooks/useGetCasesForm";
import useAddCases from "../AddCases/hooks/useAddCases";
import FormASATags from "../AddCases/components/FormASATags";

const AddCaseICU = () => {
  const { casesForm } = useGetCasesForm();
  const casesDispatch = useAddCasesDispatch();
  const { loading } = useAddCases();

  // reset state and change case type when first render page
  useEffect(() => {
    casesDispatch({
      type: "reset_state",
      data: {},
    });

    casesDispatch({
      type: "set_case_type",
      data: {
        caseType: "ICU",
      },
    });
  }, [casesDispatch]);

  return (
    <Flex flexDirection="column">
      <Header title="Tambah ICU" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadioAgeGroup />
        <FormOperation formData={casesForm?.operationTypes || []} />

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

        <Divider />

        <FormNotes />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCaseICU;
