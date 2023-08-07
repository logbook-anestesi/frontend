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

  return {
    asaTags,
    procedureTypes,
    anesthesiaTypes,
    noraProcedureTypes,
    operationTypes,
    tags,
    caseData,
    loading,
  };
};

export default useGetDetailCases;
