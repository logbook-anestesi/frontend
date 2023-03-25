import { Button, Divider, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { ButtonContainer, HomeContainer } from "./styles";

const { Title } = Typography;

const Home = () => {
  const { logoutAccount } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <HomeContainer>
      <Title level={3}>Logbook Anastesi</Title>
      <ButtonContainer>
        <Button type="primary" onClick={() => handleNavigate("/login")}>
          Login
        </Button>
        <Button onClick={logoutAccount}>Logout</Button>
      </ButtonContainer>
      <Divider />

      <Button type="link" onClick={() => handleNavigate("/about")}>
        About
      </Button>
      <Button type="link" onClick={() => handleNavigate("/users")}>
        List User (Private)
      </Button>
    </HomeContainer>
  );
};

export default Home;
