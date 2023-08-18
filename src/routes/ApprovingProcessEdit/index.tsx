import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import useGetDetailCases from "./hooks/useGetDetailCase";
import LoaderCircle from "../../components/LoaderCircle";
import FormRadioExam from "./components/FormRadioExam";
import { RADIO_EXAM } from "./constants";
import FormRadioAgeGroup from "./components/FormRadioAgeGroup";
import FormRadioPriority from "./components/FormRadioPriority";
import FormRadioGender from "./components/FormRadioGender";
import FormRadioLocation from "./components/FormRadioLocation";
import FormRadioEmergency from "./components/FormRadioEmergency";

const ApprovingProcessEdit = () => {
  const location = useLocation();
  const { caseData, loading } = useGetDetailCases(location?.state?.caseId);

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
            <FormRadioEmergency initialValue={caseData?.asaIsEmergency} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
