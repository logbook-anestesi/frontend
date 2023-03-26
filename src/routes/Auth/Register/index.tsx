import React, { useEffect } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { SubmitLoginContainer } from "./styles";

const { Item } = Form;
const { Password } = Input;
const { Title, Text, Link } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const { registerAccount, registerResponses } = useAuth();

  const onFinish = async (values: any) => {
    registerAccount(values);
  };

  useEffect(() => {
    if (registerResponses && registerResponses.error === null) {
      navigate("/");
    }
  }, [navigate, registerResponses]);

  useEffect(() => {
    if (registerResponses) {
      if (registerResponses?.error === null) {
        message.success("Success Register, Please Login");
        return;
      }

      message.error(registerResponses?.error[0]);
    }
  }, [registerResponses]);

  return (
    <div>
      <Title>Register</Title>
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Item>

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

        <SubmitLoginContainer>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Text>
            Already have an account? <Link href="/login">LOGIN</Link>
          </Text>
        </SubmitLoginContainer>
      </Form>
    </div>
  );
};

export default Register;
