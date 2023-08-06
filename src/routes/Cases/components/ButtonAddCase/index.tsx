import { Button, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";
import { CASE_LIST } from "../../../../constants/caseList";
import { useMemo } from "react";

interface Props {
  caseName: string;
}

const ButtonAddCase = ({ caseName }: Props) => {
  const navigate = useNavigate();

  const notSelectYet = useMemo(() => {
    return caseName === "Select Type Case";
  }, [caseName]);

  const handleOnClick = () => {
    if (notSelectYet) return;

    switch (caseName) {
      case CASE_LIST[0].title: {
        navigate("/cases/add/ok");
        return;
      }
      case CASE_LIST[1].title: {
        navigate("/cases/add/pacu");
        return;
      }
      case CASE_LIST[2].title: {
        navigate("/cases/add/nora");
        return;
      }
    }
  };

  return (
    <Button
      variant="outline"
      borderColor={colors.primaryPurple}
      color={colors.primaryPurple}
      borderRadius={10}
      onClick={handleOnClick}
      mb={3}
    >
      {notSelectYet ? (
        <Text as="b">Pilih Type Cases</Text>
      ) : (
        <Text as="b">+ Tambah {caseName}</Text>
      )}
    </Button>
  );
};

export default ButtonAddCase;
