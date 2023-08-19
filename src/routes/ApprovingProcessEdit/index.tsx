import { Flex } from "@chakra-ui/react";
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
            <FormRadioExam
              title="Merupakan Exam*"
              listOptions={RADIO_EXAM}
              initialValue={caseData?.isExam}
            />
            <FormRadioAgeGroup initialValue={caseData?.ageGroup} />
            <FormRadioPriority initialValue={caseData?.priority} />
            <FormRadioGender initialValue={caseData?.patientGender} />
            <FormRadioLocation initialValue={caseData?.location} />
            <FormNotes initialValue={caseData?.notes} />
            <FormTingkatAndEmergency
              initialValue={caseData?.asaTier}
              emergencyInitialValue={caseData?.asaIsEmergency}
            />
            <FormUsiaAndRM
              initialNoRm={caseData?.patientRecordNumber}
              initialUsia={caseData?.patientAge}
            />
            <FormDate initialValue={caseData?.date} />
            <FormASATags
              tagList={casesForm?.tags}
              initialValue={caseData?.asaTags}
            />
            <FormDPJP
              initialDpjpId={caseData?.dpjpUserId}
              initialDpjpName={caseData?.dpjpUserName}
            />
            <FormNoraTypeProcedure
              initialValue={caseData?.noraProcedureTypes}
              noraProcedureList={casesForm?.noraProcedureTypes}
            />
            <FormOperation
              formData={casesForm?.operationTypes}
              initialValue={caseData?.operationTypes}
            />
            <FormTypeAnesthesia
              anesthesiaList={casesForm?.anesthesiaTypes}
              initialValue={caseData?.anesthesiaTypes}
            />
            <FormAdditionalTags initialValue={caseData?.tags} />
            <FormSupervised initialValue={caseData?.supervisors} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
