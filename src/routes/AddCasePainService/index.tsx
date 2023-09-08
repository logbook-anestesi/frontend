import { Button, Flex, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import { useAddCasesContext, useAddCasesDispatch } from "../AddCases/contexts";
import { useEffect } from "react";
import useAddCases from "../AddCases/hooks/useAddCases";
import { useNavigate } from "react-router-dom";
import FormDate from "../AddCases/components/FormDate";
import FormLocationLainnya from "../AddCases/components/FormLocationLainnya";
import FormTypePainService from "./components/FormTypePainService";
import useGetCasesForm from "../AddCases/hooks/useGetCasesForm";

const AddCasePainService = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { casesForm } = useGetCasesForm();
  const casesDispatch = useAddCasesDispatch();
  const { createCases, loading } = useAddCases();

  const state = useAddCasesContext();

  const handleSubmitForm = async () => {
    const response = await createCases({
      date: state.date,
      caseType: state.caseType,
      dpjpUserId: state.dpjpUserId,
      ...(state?.location !== "" ? { location: state.location } : {}),
      ...(state?.tagIds.length !== 0 ? { tagIds: state.tagIds } : {}),
      ...(state?.notes !== "" ? { notes: state.notes } : {}),
      ...(state?.procedureTypeIds.length !== 0
        ? { procedureTypeIds: state.procedureTypeIds }
        : {}),
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Case Berhasil Dibuat",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      navigate("/cases");
      return;
    }

    if (!response?.success) {
      toast({
        title: "Failed Add Cases",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // reset state and change case type when first render page
  useEffect(() => {
    casesDispatch({
      type: "reset_state",
      data: {},
    });

    casesDispatch({
      type: "set_case_type",
      data: {
        caseType: "PAIN_SERVICE",
      },
    });
  }, [casesDispatch]);

  return (
    <Flex flexDirection="column">
      <Header title="Tambah Pain Service" />

      <Flex padding="30px" direction="column" gap={4}>
        <FormDate />
        <FormLocationLainnya />
        <FormTypePainService
          painServiceTypes={casesForm?.painServiceTypes || []}
        />

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          isLoading={loading}
          onClick={handleSubmitForm}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCasePainService;
