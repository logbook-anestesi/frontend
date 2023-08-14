import { Button, Image, Text } from "@chakra-ui/react";
import fileIcon from "../../assets/fileIcon.png";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  caseId: string;
}
const ButtonFile = ({ title, caseId }: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      textAlign="center"
      gap={2}
      border="1px solid purple"
      borderRadius="10px"
      width="fit-content"
      backgroundColor="transparent"
      h={8}
      onClick={() =>
        navigate("/cases/details", {
          state: { caseId: caseId },
        })
      }
    >
      <Image src={fileIcon} alt="" width={3} height={4} />
      <Text fontSize="xs" color={colors.primaryPurple}>
        {title}
      </Text>
    </Button>
  );
};

export default ButtonFile;
