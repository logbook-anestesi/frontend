import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useGetDetailCases from "./hooks/useGetDetailCase";
import LoaderCircle from "../../components/LoaderCircle";
import FormRadioExam from "./components/FormRadioExam";
import { RADIO_EXAM } from "./constants";
import { useApprovalEditDispatch } from "./contexts";

const ApprovingProcessEdit = () => {
  const location = useLocation();
  const approveEditDispatch = useApprovalEditDispatch();
  const { caseData, loading } = useGetDetailCases(location?.state?.caseId);

  useEffect(() => {
    approveEditDispatch({
      type: "set_all_data_case",
      data: {
        isExam: caseData?.isExam,
      },
    });
    console.log("999 INI CASE ID", caseData);
  }, [approveEditDispatch, caseData]);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/review/cases" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        {loading ? (
          <LoaderCircle />
        ) : (
          <>
            <FormRadioExam title="Merupakan Exam*" listOptions={RADIO_EXAM} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
