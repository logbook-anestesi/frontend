import { Divider, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useApprovalEditContext } from "./contexts";

import useGetDetailCases from "./hooks/useGetDetailCase";
import { RADIO_EXAM } from "./constants";

import Header from "../../components/Header";
import LoaderCircle from "../../components/LoaderCircle";
import FormRadioExam from "./components/FormRadioExam";
import FormRadioAgeGroup from "./components/FormRadioAgeGroup";
import FormRadioPriority from "./components/FormRadioPriority";
import FormRadioGender from "./components/FormRadioGender";
import FormRadioLocation from "./components/FormRadioLocation";
import FormNotes from "./components/FormNotes";
import FormTingkatAndEmergency from "./components/FormTingkatAndEmergency";
import FormUsiaAndRM from "./components/FormUsiaAndRM";
import FormDate from "./components/FormDate";
import FormASATags from "./components/FormASATags";
import useGetCasesForm from "./hooks/useGetCasesForm";
import FormDPJP from "./components/FormDPJP";
import FormNoraTypeProcedure from "./components/FormNoraTypeProcedure";
import FormOperation from "./components/FormOperation";
import FormTypeAnesthesia from "./components/FormTypeAnesthesia";
import FormAdditionalTags from "./components/FormAdditionalTags";
import FormSupervised from "./components/FormSupervised";
import FormTypeProcedure from "./components/FormTypeProcedure";

const ApprovingProcessEdit = () => {
  const location = useLocation();
  const { casesForm } = useGetCasesForm();
  const { caseData, loading } = useGetDetailCases(location?.state?.caseId);
  const state = useApprovalEditContext();

  console.log("999 state full", state);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/review/cases" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        {loading ? (
          <LoaderCircle />
        ) : (
          <>
            <FormDate initialValue={caseData?.date} />
            <FormDPJP
              initialDpjpId={caseData?.dpjpUserId}
              initialDpjpName={caseData?.dpjpUserName}
            />
            <FormRadioExam
              title="Merupakan Exam*"
              listOptions={RADIO_EXAM}
              initialValue={caseData?.isExam}
            />
            <FormRadioAgeGroup initialValue={caseData?.ageGroup} />
            <FormRadioLocation initialValue={caseData?.location} />
            <FormRadioPriority initialValue={caseData?.priority} />

            <FormOperation
              formData={casesForm?.operationTypes}
              initialValue={caseData?.operationTypes}
            />

            <FormTypeAnesthesia
              anesthesiaList={casesForm?.anesthesiaTypes}
              initialValue={caseData?.anesthesiaTypes}
            />

            <FormTypeProcedure
              procedureList={casesForm?.procedureTypes}
              initialValue={caseData?.procedureTypes}
            />

            <FormNoraTypeProcedure
              initialValue={caseData?.noraProcedureTypes}
              noraProcedureList={casesForm?.noraProcedureTypes}
            />

            <Divider />

            <Text as="b" fontSize="xl">
              Data Pasien
            </Text>

            <FormUsiaAndRM
              initialNoRm={caseData?.patientRecordNumber}
              initialUsia={caseData?.patientAge}
            />

            <FormRadioGender initialValue={caseData?.patientGender} />

            <Divider />

            <Text as="b" fontSize="xl">
              ASA
            </Text>

            <FormTingkatAndEmergency
              initialValue={caseData?.asaTier}
              emergencyInitialValue={caseData?.asaIsEmergency}
            />

            <FormASATags
              tagList={casesForm?.tags}
              initialValue={caseData?.asaTags}
            />

            <Divider />

            <FormSupervised initialValue={caseData?.supervisors} />
            <FormNotes initialValue={caseData?.notes} />
            <FormAdditionalTags initialValue={caseData?.tags} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
