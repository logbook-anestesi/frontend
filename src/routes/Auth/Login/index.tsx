import { Flex, Image } from '@chakra-ui/react';
import logbookIcon from '../../../assets/logbook-icon.svg';
import { icon } from './styles';
import Footer from './components/Footer';
import EmailPasswordInput from './components/EmailPasswordInput';

const Login = () => {
  return (
    <Flex direction="column" align="center" paddingTop={16} justify="center">
      <Image src={logbookIcon} className={icon} />
      <EmailPasswordInput />
      <Footer />
    </Flex>
  );
};

export default Login;
