import { Button, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApprovalEditContext } from './contexts';

import { RADIO_EXAM } from './constants';

import Header from '../../components/Header';
import LoaderCircle from '../../components/LoaderCircle';
import FormRadioExam from './components/FormRadioExam';
import FormRadioAgeGroup from './components/FormRadioAgeGroup';
import FormRadioPriority from './components/FormRadioPriority';
import FormRadioGender from './components/FormRadioGender';
import FormRadioLocation from './components/FormRadioLocation';
import FormNotes from './components/FormNotes';
import FormTingkatAndEmergency from './components/FormTingkatAndEmergency';
import FormUsiaAndRM from './components/FormUsiaAndRM';
import FormDate from './components/FormDate';
import FormASATags from './components/FormASATags';
import FormDPJP from './components/FormDPJP';
import FormNoraTypeProcedure from './components/FormNoraTypeProcedure';
import FormOperation from './components/FormOperation';
import FormTypeAnesthesia from './components/FormTypeAnesthesia';
import FormAdditionalTags from './components/FormAdditionalTags';
import FormSupervised from './components/FormSupervised';
import FormTypeProcedure from './components/FormTypeProcedure';
import { colors } from '../../constants/colors';
import useAddApproval from '../ApprovingProcess/hooks/useAddApproval';
import useAuth from '../../hooks/useAuth';
import useGetCasesForm from '../../hooks/useGetCasesForm';
import useGetDetailCases from '../../hooks/useGetDetailCase';
import FormTypeDiagnose from './components/FormTypeDiagnose';
import FormTotalPatient from './components/FormTotalPatient';
import FormTypePainService from './components/FormTypePainService';
import FormProcedurePainService from './components/FormProcedurePainService';
import RadioPenilaian from './components/RadioPenilaian';
import TextPenilaian from './components/TextPenilaian';

const ApprovingProcessEdit = () => {
  const { accountData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const { caseData, loading } = useGetDetailCases(location?.state?.caseId);
  const state = useApprovalEditContext();
  const { createApproval, loading: loadingApproval } = useAddApproval();
  const toast = useToast();

  const handleSubmitForm = async () => {
    const response = await createApproval({
      caseId: caseData?.id,
      status: 'APPROVED',
      ...(state?.rateNotes !== '' ? { rate: state.rateNotes } : {}),
      ...(state?.rate !== '' ? { rate: state.rate } : {}),
      caseEditRequest: {
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
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Berhasil Approve Case',
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
        title={`Approve ${caseData?.caseType || ''} - ${
          caseData?.id.substring(0, 4) || ''
        }`}
      />

      <Flex padding="10px 30px" direction="column" gap="16px">
        {loading ? (
          <LoaderCircle />
        ) : (
          <>
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
            <FormRadioLocation
              initialValue={caseData?.location}
              type={caseData?.caseType}
            />
            <FormRadioPriority initialValue={caseData?.priority} />

            <FormOperation
              formData={casesForm?.operationTypes}
              initialValue={caseData?.operationTypes}
            />

            <FormNoraTypeProcedure
              initialValue={caseData?.noraProcedureTypes}
              noraProcedureList={casesForm?.noraProcedureTypes}
            />

            <FormTypeAnesthesia
              anesthesiaList={casesForm?.anesthesiaTypes}
              initialValue={caseData?.anesthesiaTypes}
            />

            <FormTypeProcedure
              procedureList={casesForm?.procedureTypes}
              initialValue={caseData?.procedureTypes}
            />

            <FormTypeDiagnose
              diagnoseList={casesForm?.diagnoses}
              initialValue={caseData?.diagnoses}
            />

            <FormTypePainService
              typePainServices={casesForm?.painServiceTypes}
              initialValue={caseData?.painServiceTypes}
            />

            <FormProcedurePainService
              procedurePainServices={casesForm?.painServiceProcedures}
              initialValue={caseData?.painServiceProcedures}
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

            <FormTotalPatient
              initialNumberOfPatient={caseData?.numberOfPatient}
            />

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

            <FormSupervised initialValue={caseData?.supervisors} />
            <FormNotes initialValue={caseData?.notes} />
            <FormAdditionalTags initialValue={caseData?.tags} />

            <Text as="b" fontSize="xl">
              Penilaian
            </Text>

            <RadioPenilaian />
            <TextPenilaian />

            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              color={colors.white}
              onClick={handleSubmitForm}
              isLoading={loadingApproval}
            >
              Submit
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default ApprovingProcessEdit;
