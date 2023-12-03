import { Divider, Flex, Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import FieldText from './components/FieldText';
import FieldTicker from './components/FieldTicker';
import { useLocation } from 'react-router-dom';
import LoaderCircle from '../../components/LoaderCircle';
import useGetDetailCases from '../../hooks/useGetDetailCase';

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
    diagnoses,
    painServiceProcedures,
    painServiceTypes,
  } = useGetDetailCases(location?.state?.caseId || '');

  return (
    <Flex flexDirection="column">
      <Header title="Case Detail" />

      <Flex padding="10px 30px" direction="column" gap={4}>
        {loading && <LoaderCircle />}

        {!loading && (
          <>
            <FieldText label="Residen" value={caseData?.userName} />
            <FieldText label="DPJP" value={caseData?.dpjpUserName} />
            <FieldText label="Merupakan Ujian" value={caseData?.isExam} />

            <FieldText label="Kelompok Umur" value={caseData?.ageGroup} />
            <FieldText label="Prioritas" value={caseData?.priority} />

            <FieldText label="Lokasi" value={caseData?.location} />

            <FieldTicker label="Tipe Operasi" listValue={operationTypes} />
            <FieldTicker label="Tipe Anestesi" listValue={anesthesiaTypes} />
            <FieldTicker
              label="Prosedur Yang Dilakukan"
              listValue={procedureTypes}
            />
            <FieldTicker label="Diagnosis" listValue={diagnoses} />
            <FieldTicker
              label="Prosedur Manajemen Nyeri"
              listValue={painServiceProcedures}
            />

            <FieldTicker
              label="Tipe Manajemen Nyeri"
              listValue={painServiceTypes}
            />

            <FieldTicker label="Prosedur NORA" listValue={noraProcedureTypes} />

            {caseData?.patientAge && (
              <>
                <Divider />
                <Text as="b" fontSize="xl">
                  Data Pasien
                </Text>
              </>
            )}

            <FieldText label="Usia Pasien" value={caseData?.patientAge} />
            <FieldText label="No. RM" value={caseData?.patientRecordNumber} />

            <FieldText label="Total Pasien" value={caseData?.numberOfPatient} />

            {caseData?.asaTier && (
              <>
                <Divider />
                <Text as="b" fontSize="xl">
                  ASA
                </Text>
              </>
            )}

            <Flex gap={20}>
              <FieldText label="Tingkat*" value={caseData?.asaTier} />
              <FieldText label="Emergensi*" value={caseData?.asaIsEmergency} />
            </Flex>

            <FieldTicker label="Tags" listValue={asaTags} />

            <Divider />

            <FieldTicker
              label="Disupervisi Oleh"
              listValue={caseData?.supervisors.map((senior) => senior.userName)}
            />

            <FieldTicker
              label="Supervising"
              listValue={caseData?.supervisees
                .map((junior) => junior.userName)
                .filter((junior) => junior !== caseData?.userName)}
            />
            <FieldText label="Catatan" value={caseData?.notes} />
            <FieldTicker label="Tags Lainnya " listValue={tags} />

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
