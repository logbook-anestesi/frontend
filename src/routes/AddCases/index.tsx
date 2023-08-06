import { Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormDate from "./components/FormDate";
import FormDPJP from "./components/FormDPJP";
import FormRadioExam from "./components/FormRadioExam";
import { RADIO_EXAM } from "./constants";
import FormOperation from "./components/FormOperation";
import { useAddCasesContext, useAddCasesDispatch } from "./contexts";
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
import FormSupervised from "./components/FormSupervised";
import FormNotes from "./components/FormNotes";
import FormAdditionalTags from "./components/FormAdditionalTags";
import useAddCases from "./hooks/useAddCases";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddCases = () => {
  const casesDispatch = useAddCasesDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const { createCases, loading } = useAddCases();
  const {
    location,
    date,
    isExam,
    ageGroup,
    patientAge,
    patientRecordNumber,
    patientGender,
    asaTier,
    priority,
    notes,
    dpjpUserId,
    operationTypeIds,
    anesthesiaTypeIds,
    procedureTypeIds,
    supervisorIds,
    asaTagIds,
    tagIds,
    asaIsEmergency,
    caseType,
  } = useAddCasesContext();

  const handleSubmitForm = async () => {
    const response = await createCases({
      location,
      date,
      isExam,
      ageGroup,
      patientAge,
      patientRecordNumber,
      patientGender,
      asaTier,
      priority,
      notes,
      dpjpUserId,
      operationTypeIds,
      anesthesiaTypeIds,
      procedureTypeIds,
      supervisorIds,
      asaTagIds,
      asaIsEmergency,
      caseType,
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

  useEffect(() => {
    casesDispatch({
      type: "reset_state",
      data: {},
    });
  }, [casesDispatch]);

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

        <Divider />

        <FormSupervised />
        <FormNotes />
        <FormAdditionalTags />

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

export default AddCases;
