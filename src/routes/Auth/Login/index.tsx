import { useEffect } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const { Item } = Form;
const { Password } = Input;
const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const { loginAccount, loginResponse } = useAuth();

  const onFinish = (values: any) => {
    loginAccount(values);
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.error === null) {
        message.success("Login Success");
        navigate("/");
        return;
      }

      message.error(loginResponse.error[0]);
    }
  }, [loginResponse, navigate]);

  return (
    <div>
      <Title>Login</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Password />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Login;
