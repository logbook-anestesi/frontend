import { useEffect, useMemo, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Case } from "../../../Cases/hooks/useGetCases/types";

const useGetDetailCases = (caseId: string) => {
  const [loading, setLoading] = useState(false);
  const [caseData, setCaseData] = useState<Case>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get(`/cases/?id=${caseId}`);
      const data = await response.data.data;

      setLoading(false);
      setCaseData(data);
    };

    fetchData();
  }, [caseId]);

  console.log(caseData);

  const asaTags = useMemo(() => {
    return caseData?.asaTags.map((asaTag) => asaTag.tagName);
  }, [caseData?.asaTags]);

  const procedureTypes = useMemo(() => {
    return caseData?.procedureTypes.map(
      (procedureType) => procedureType.procedureTypeName
    );
  }, [caseData?.procedureTypes]);

  const anesthesiaTypes = useMemo(() => {
    return caseData?.anesthesiaTypes.map(
      (anesthesiaType) => anesthesiaType.anesthesiaTypeName
    );
  }, [caseData?.anesthesiaTypes]);

  const noraProcedureTypes = useMemo(() => {
    return caseData?.noraProcedureTypes.map(
      (noraProcedureType) => noraProcedureType.noraProcedureTypeName
    );
  }, [caseData?.noraProcedureTypes]);

  const operationTypes = useMemo(() => {
    return caseData?.operationTypes.map(
      (operationType) => operationType.operationTypeName
    );
  }, [caseData?.operationTypes]);

  const tags = useMemo(() => {
    return caseData?.tags.map((tag) => tag.tagName);
  }, [caseData?.tags]);

  const diagnoses = useMemo(() => {
    return caseData?.diagnoses.map((diagnose) => diagnose.diagnoseName);
  }, [caseData?.diagnoses]);

  const painServiceTypes = useMemo(() => {
    return caseData?.painServiceTypes.map(
      (painServiceType) => painServiceType.painServiceTypeName
    );
  }, [caseData?.painServiceTypes]);

  const painServiceProcedures = useMemo(() => {
    return caseData?.painServiceProcedures.map(
      (painServiceProcedure) => painServiceProcedure.painServiceProcedureName
    );
  }, [caseData?.painServiceProcedures]);

  return {
    asaTags,
    procedureTypes,
    anesthesiaTypes,
    noraProcedureTypes,
    operationTypes,
    tags,
    caseData,
    loading,
    diagnoses,
    painServiceTypes,
    painServiceProcedures,
  };
};

export default useGetDetailCases;
