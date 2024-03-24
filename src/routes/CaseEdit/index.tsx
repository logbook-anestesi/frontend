import { Button, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';
import useGetDetailCases from '../../hooks/useGetDetailCase';
import FormDate from '../ApprovingProcessEdit/components/FormDate';
import FormDPJP from '../ApprovingProcessEdit/components/FormDPJP';
import FormRadioExam from '../ApprovingProcessEdit/components/FormRadioExam';
import { RADIO_EXAM } from '../ApprovingProcessEdit/constants';
import FormRadioAgeGroup from '../ApprovingProcessEdit/components/FormRadioAgeGroup';
import FormRadioLocation from '../ApprovingProcessEdit/components/FormRadioLocation';
import FormRadioPriority from '../ApprovingProcessEdit/components/FormRadioPriority';
import FormOperation from '../ApprovingProcessEdit/components/FormOperation';
import useGetCasesForm from '../../hooks/useGetCasesForm';
import FormTypeAnesthesia from '../ApprovingProcessEdit/components/FormTypeAnesthesia';
import FormTypeProcedure from '../ApprovingProcessEdit/components/FormTypeProcedure';
import FormUsiaAndRM from '../ApprovingProcessEdit/components/FormUsiaAndRM';
import FormRadioGender from '../ApprovingProcessEdit/components/FormRadioGender';
import FormTotalPatient from '../ApprovingProcessEdit/components/FormTotalPatient';
import FormTingkatAndEmergency from '../ApprovingProcessEdit/components/FormTingkatAndEmergency';
import FormASATags from '../ApprovingProcessEdit/components/FormASATags';
import FormNotes from '../ApprovingProcessEdit/components/FormNotes';
import FormAdditionalTags from '../ApprovingProcessEdit/components/FormAdditionalTags';
import { colors } from '../../constants/colors';
import FormNoraTypeProcedure from '../ApprovingProcessEdit/components/FormNoraTypeProcedure';

const CaseEdit = () => {
  const location = useLocation();
  const { casesForm } = useGetCasesForm();

  const { caseData } = useGetDetailCases(location?.state?.caseId || '');

  const isHavePatientData =
    caseData?.patientRecordNumber !== null ||
    caseData.patientAge !== null ||
    caseData.patientGender !== null;

  const isHaveAsaData =
    caseData?.asaTier !== null ||
    caseData?.asaIsEmergency !== null ||
    (caseData.asaTags.length || 0) > 0;

  return (
    <Flex flexDirection="column">
      <Header
        title={`Edit Case ${caseData?.caseType} - ${caseData?.id.substring(
          0,
          4,
        )}`}
      />

      <Flex padding="10px 30px" direction="column" gap={4}>
        <FormDate initialValue={caseData?.date} />
        <FormDPJP
          initialDpjpId={caseData?.dpjpUserId}
          initialDpjpName={caseData?.dpjpUserName}
        />

        <FormRadioExam
          title="Merupakan Ujian"
          listOptions={RADIO_EXAM}
          initialValue={caseData?.isExam}
        />

        <FormRadioAgeGroup initialValue={caseData?.ageGroup} />

        <FormNoraTypeProcedure
          noraProcedureList={casesForm?.noraProcedureTypes}
          initialValue={caseData?.noraProcedureTypes}
        />

        <FormRadioLocation
          initialValue={caseData?.location}
          type={caseData?.caseType}
        />

        <FormRadioPriority initialValue={caseData?.priority} />
        <FormOperation
          formData={casesForm?.operationTypes}
          initialValue={caseData?.operationTypes}
        />

        <FormTypeProcedure
          initialValue={caseData?.procedureTypes}
          procedureList={casesForm?.procedureTypes}
        />

        <FormTypeAnesthesia
          initialValue={caseData?.anesthesiaTypes}
          anesthesiaList={casesForm?.anesthesiaTypes}
        />

        {isHavePatientData && (
          <>
            <Divider />
            <Text as="b" fontSize="xl">
              Data Pasien
            </Text>
          </>
        )}

        <FormUsiaAndRM
          initialNoRm={caseData?.patientRecordNumber}
          initialUsia={caseData?.patientAge}
        />

        <FormRadioGender initialValue={caseData?.patientGender} />

        <FormTotalPatient initialNumberOfPatient={caseData?.numberOfPatient} />

        {isHaveAsaData && (
          <>
            <Divider />

            <Text as="b" fontSize="xl">
              ASA
            </Text>
          </>
        )}

        <FormTingkatAndEmergency
          initialValue={caseData?.asaTier}
          emergencyInitialValue={caseData?.asaIsEmergency}
        />

        <FormASATags
          tagList={casesForm?.asaTags}
          initialValue={caseData?.asaTags}
        />

        <Divider />

        <FormNotes initialValue={caseData?.notes} />
        <FormAdditionalTags initialValue={caseData?.tags} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          marginY={4}
          // onClick={handleSubmitForm}
          // isLoading={loadingApproval}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default CaseEdit;
