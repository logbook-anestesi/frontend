import { Divider, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import FieldText from "./components/FieldText";
import FieldTicker from "./components/FieldTicker";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useGetDetailCases from "./hooks/useGetDetailCase";
import LoaderCircle from "../../components/LoaderCircle";

const CaseDetails = () => {
  const location = useLocation();
  const {
    caseData,
    loading,
    anesthesiaTypes,
    asaTags,
    noraProcedureTypes,
    operationTypes,
    procedureTypes,
    tags,
  } = useGetDetailCases(location?.state?.caseId || "");

  useEffect(() => {
    console.log("999 INI CASE DATA", loading, caseData);
  }, [caseData, loading, location.state]);

  return (
    <Flex flexDirection="column">
      <Header pathBack="/cases" title="Case Detail" />

      <Flex padding="30px" direction="column" gap={4}>
        {loading && <LoaderCircle />}

        {!loading && (
          <>
            <FieldText label="Residen" value={caseData?.userName} />
            <FieldText label="DPJP" value={caseData?.dpjpUserName} />
            <FieldText
              label="Merupakan Exam"
              value={caseData?.isExam ? "Ya" : "Tidak"}
            />

            <Flex gap={20}>
              <FieldText label="Age Group" value={caseData?.ageGroup} />
              <FieldText label="Priority" value={caseData?.priority} />
            </Flex>

            <FieldText label="Lokasi" value={caseData?.location} />

            <FieldTicker label="Tipe Operasi" listValue={operationTypes} />
            <FieldTicker label="Tipe Anesthesi" listValue={anesthesiaTypes} />
            <FieldTicker label="Procedure Done" listValue={procedureTypes} />
            <FieldTicker
              label="NORA Procedure"
              listValue={noraProcedureTypes}
            />

            <Divider />

            <Text as="b" fontSize="xl">
              Data Pasien
            </Text>

            <Flex gap={20}>
              <FieldText label="Usia Pasien" value={caseData?.patientAge} />
              <FieldText label="No. RM" value={caseData?.patientRecordNumber} />
            </Flex>

            <FieldText label="Jenis Kelamin" value={caseData?.patientGender} />

            <Divider />

            <Text as="b" fontSize="xl">
              ASA
            </Text>

            <Flex gap={20}>
              <FieldText label="Tingkat" value={caseData?.asaTier} />
              <FieldText
                label="Emergensi"
                value={caseData?.asaIsEmergency ? "YA" : "TIDAK"}
              />
            </Flex>

            <FieldTicker label="Tags" listValue={asaTags} />

            <Divider />

            <FieldText label="Supervised By" value="Dr. Nurhasanah" />
            <FieldText label="Notes" value="-" />
            <FieldTicker label="Additional Tags " listValue={tags} />

            {/* <Divider />

            <Text as="b" fontSize="xl">
              Penilaian Konsulen
            </Text> */}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default CaseDetails;
