import { Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "../AddCases/components/FormDate";
import FormDPJP from "../AddCases/components/FormDPJP";
import FormRadioAgeGroup from "../AddCases/components/FormRadioAgeGroup";
import FormUsiaAndRM from "../AddCases/components/FormUsiaAndRM";
import FormRadioGender from "../AddCases/components/FormRadioGender";
import FormTingkatAndEmergency from "../AddCases/components/FormTingkatAndEmergency";
import FormNotes from "../AddCases/components/FormNotes";
import { colors } from "../../constants/colors";
import { useAddCasesContext, useAddCasesDispatch } from "../AddCases/contexts";
import { useEffect } from "react";
import useGetCasesForm from "../AddCases/hooks/useGetCasesForm";
import useAddCases from "../AddCases/hooks/useAddCases";
import { useNavigate } from "react-router-dom";
import FormASATags from "../AddCases/components/FormASATags";
import FormTypeProcedure from "../AddCases/components/FormTypeProcedure";
import FormTypeAnesthesia from "../AddCases/components/FormTypeAnesthesia";
import FormNoraTypeProcedure from "../AddCases/components/FormNoraTypeProcedure";

const AddCaseNora = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const casesDispatch = useAddCasesDispatch();
  const { createCases, loading } = useAddCases();

  const {
    caseType,
    date,
    ageGroup,
    patientAge,
    patientRecordNumber,
    patientGender,
    asaTier,
    asaIsEmergency,
    notes,
    dpjpUserId,
    asaTagIds,
    procedureTypeIds,
    noraProcedureTypeIds,
    anesthesiaTypeIds,
    tagIds,
  } = useAddCasesContext();

  const handleSubmitForm = async () => {
    const response = await createCases({
      caseType,
      date,
      ageGroup,
      patientAge,
      patientRecordNumber,
      patientGender,
      asaTier,
      asaIsEmergency,
      notes,
      dpjpUserId,
      asaTagIds,
      procedureTypeIds,
      noraProcedureTypeIds,
      anesthesiaTypeIds,
      tagIds,
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Case Berhasil Dibuat",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      navigate("/cases");
      return;
    }

    if (!response?.success) {
      toast({
        title: "Failed Add Cases",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // reset state and change case type when first render page
  useEffect(() => {
    casesDispatch({
      type: "reset_state",
      data: {},
    });

    casesDispatch({
      type: "set_case_type",
      data: {
        caseType: "NORA",
      },
    });
  }, [casesDispatch]);

  return (
    <Flex flexDirection="column">
      <Header title="Tambah NORA" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormDPJP />
        <FormRadioAgeGroup />

        <FormTypeProcedure procedureList={casesForm?.procedureTypes || []} />
        <FormTypeAnesthesia anesthesiaList={casesForm?.anesthesiaTypes || []} />
        <FormNoraTypeProcedure
          noraProcedureList={casesForm?.noraProcedureTypes || []}
        />

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
          onClick={handleSubmitForm}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCaseNora;
