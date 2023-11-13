import { Button } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  handleOnClick?: () => void;
}
const ButtonAdd = ({ handleOnClick }: Props) => {
  return (
    <Button
      variant="outline"
      borderColor={colors.primaryPurple}
      color={colors.primaryPurple}
      borderRadius={10}
      onClick={handleOnClick}
      mb={3}
    >
      + Tambah Ujian
    </Button>
  );
};

export default ButtonAdd;
