import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormRadioAgeGroup from "./components/FormRadioAgeGroup";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useGetDetailCases from "./hooks/useGetDetailCase";
import LoaderCircle from "../../components/LoaderCircle";

const ApprovingProcessEdit = () => {
  const location = useLocation();
  const { caseData, loading } = useGetDetailCases(location?.state?.caseId);

  useEffect(() => {
    console.log("999 INI CASE ID", caseData);
  }, [caseData]);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/review/cases" title="Approve OK-014-01" />

      <Flex padding="30px" direction="column" gap="16px">
        {loading ? (
          <LoaderCircle />
        ) : (
          <>
            <FormRadioAgeGroup />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
