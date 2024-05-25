import { Button, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
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
import FormTypeDiagnose from '../ApprovingProcessEdit/components/FormTypeDiagnose';
import FormTypePainService from '../ApprovingProcessEdit/components/FormTypePainService';
import FormProcedurePainService from '../ApprovingProcessEdit/components/FormProcedurePainService';
import { useApprovalEditContext } from '../ApprovingProcessEdit/contexts';
import useEditCase from './hooks/useEditCase';
import useAuth from '../../hooks/useAuth';

const CaseEdit = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { accountData } = useAuth();
  const { casesForm } = useGetCasesForm();
  const state = useApprovalEditContext();
  const { editCase, loading: loadingEditCase } = useEditCase();
  const { caseId } = useParams<{ caseId: string }>();

  const { caseData } = useGetDetailCases(caseId || '');

  const isHavePatientData =
    caseData?.patientRecordNumber !== null ||
    caseData.patientAge !== null ||
    caseData.patientGender !== null;

  const isHaveAsaData =
    caseData?.asaTier !== null ||
    (caseData?.asaIsEmergency !== null && caseData.asaIsEmergency === true) ||
    (caseData.asaTags.length || 0) > 0;

  const handleSubmitForm = async () => {
    const response = await editCase(
      {
        userId: accountData.id,
        date: state.date,
        ...(state?.asaIsEmergency !== null
          ? { asaIsEmergency: state.asaIsEmergency }
          : {}),
        ...(state?.asaTier !== 0 ? { asaTier: state.asaTier } : {}),
        ...(state?.isExam !== null ? { isExam: state.isExam } : {}),
        ...(state?.patientAge !== 0 ? { patientAge: state.patientAge } : {}),
        ...(state?.patientGender !== ''
          ? { patientGender: state.patientGender }
          : {}),
        ...(state?.rateNotes !== '' ? { ageGroup: state.rateNotes } : {}),
        ...(state?.ageGroup !== '' ? { ageGroup: state.ageGroup } : {}),
        ...(state?.location !== '' ? { location: state.location } : {}),
        ...(state?.priority !== '' ? { priority: state.priority } : {}),
        ...(state?.tagIds.length !== 0 ? { tagIds: state.tagIds } : {}),
        ...(state?.notes !== '' ? { notes: state.notes } : {}),
        ...(state?.numberOfPatient !== 0
          ? { numberOfPatient: state.numberOfPatient }
          : {}),
        ...(state?.anesthesiaTypeIds.length !== 0
          ? { anesthesiaTypeIds: state.anesthesiaTypeIds }
          : {}),
        ...(state?.asaTagIds.length !== 0
          ? { asaTagIds: state.asaTagIds }
          : {}),
        ...(state?.noraProcedureTypeIds.length !== 0
          ? { noraProcedureTypeIds: state.noraProcedureTypeIds }
          : {}),
        ...(state?.operationTypeIds.length !== 0
          ? { operationTypeIds: state.operationTypeIds }
          : {}),
        ...(state?.patientRecordNumber !== ''
          ? { patientRecordNumber: state.patientRecordNumber }
          : {}),
        ...(state?.procedureTypeIds.length !== 0
          ? { procedureTypeIds: state.procedureTypeIds }
          : {}),
        ...(state?.supervisorIds.length !== 0
          ? { superviseeIds: state.supervisorIds }
          : {}),
        ...(state?.diagnoseIds.length !== 0
          ? { diagnoseIds: state.diagnoseIds }
          : {}),
        ...(state?.typePainServiceIds.length !== 0
          ? { painServiceTypeIds: state.typePainServiceIds }
          : {}),
        ...(state?.procedurePainServiceIds.length !== 0
          ? { painServiceProcedureIds: state.procedurePainServiceIds }
          : {}),
      },
      caseData?.id || '',
    );

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Berhasil Edit Case',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate(-1);
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Approve Case',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 6000,
        isClosable: true,
      });
    }
  };

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

        <FormTypeDiagnose
          diagnoseList={casesForm?.diagnoses}
          initialValue={caseData?.diagnoses}
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

        <FormTypePainService
          initialValue={caseData?.painServiceTypes}
          typePainServices={casesForm?.painServiceTypes}
        />

        <FormProcedurePainService
          initialValue={caseData?.painServiceProcedures}
          procedurePainServices={casesForm?.painServiceProcedures}
        />

        <FormNotes initialValue={caseData?.notes} />
        <FormAdditionalTags initialValue={caseData?.tags} />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          marginY={4}
          onClick={handleSubmitForm}
          isLoading={loadingEditCase}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default CaseEdit;
