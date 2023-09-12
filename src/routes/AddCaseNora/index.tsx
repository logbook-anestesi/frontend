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
import useAddCases from "../AddCases/hooks/useAddCases";
import { useNavigate } from "react-router-dom";
import FormASATags from "../AddCases/components/FormASATags";
import FormTypeProcedure from "../AddCases/components/FormTypeProcedure";
import FormTypeAnesthesia from "../AddCases/components/FormTypeAnesthesia";
import FormNoraTypeProcedure from "../AddCases/components/FormNoraTypeProcedure";
import useGetCasesForm from "../../hooks/useGetCasesForm";

const AddCaseNora = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const casesDispatch = useAddCasesDispatch();
  const { createCases, loading } = useAddCases();

  const state = useAddCasesContext();

  const handleSubmitForm = async () => {
    const response = await createCases({
      asaIsEmergency: state.asaIsEmergency,
      date: state.date,
      isExam: state.isExam,
      patientAge: state.patientAge,
      patientGender: state.patientGender,
      caseType: state.caseType,
      dpjpUserId: state.dpjpUserId,
      ...(state?.asaTier !== 0 ? { asaTier: state.asaTier } : {}),
      ...(state?.ageGroup !== "" ? { ageGroup: state.ageGroup } : {}),
      ...(state?.location !== "" ? { location: state.location } : {}),
      ...(state?.priority !== "" ? { priority: state.priority } : {}),
      ...(state?.tagIds.length !== 0 ? { tagIds: state.tagIds } : {}),
      ...(state?.notes !== "" ? { notes: state.notes } : {}),
      ...(state?.anesthesiaTypeIds.length !== 0
        ? { anesthesiaTypeIds: state.anesthesiaTypeIds }
        : {}),
      ...(state?.asaTagIds.length !== 0 ? { asaTagIds: state.asaTagIds } : {}),
      ...(state?.noraProcedureTypeIds.length !== 0
        ? { noraProcedureTypeIds: state.noraProcedureTypeIds }
        : {}),
      ...(state?.operationTypeIds.length !== 0
        ? { operationTypeIds: state.operationTypeIds }
        : {}),
      ...(state?.patientRecordNumber !== ""
        ? { patientRecordNumber: state.patientRecordNumber }
        : {}),
      ...(state?.procedureTypeIds.length !== 0
        ? { procedureTypeIds: state.procedureTypeIds }
        : {}),
      ...(state?.supervisorIds.length !== 0
        ? { superviseeIds: state.supervisorIds }
        : {}),
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
