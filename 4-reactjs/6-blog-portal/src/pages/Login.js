import React, { useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { UserApiService } from "../services/userService";
import { AuthUtils } from "../utils/AuthUtils";
const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const PASSWORD_REGEX_MESSAGE =
  "Password should be contains at least one alphabet and contains at least one digit and is at least 8 characters long and should have special character.";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    UserApiService.loginUser(values)
      .then((data) => {
        if (data?.status_code === 404) {
          messageApi.open({
            type: "error",
            content: "user is not found!",
          });
        } else {
          AuthUtils.saveToken(data?.results?.token);
          AuthUtils.saveUserName(data?.results?.username);
          form.resetFields(); // empty form input fields
          messageApi.open({
            type: "success",
            content: "User is logged in successfully.",
          });

          window.location.href = "/";
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>Login</Typography.Title>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter valid email address",
            },
          ]}
          initialValue="borolijuw@mailinator.com"
        >
          <Input placeholder="Type Your Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
            {
              pattern: PASSWORD_REGEX,
              message: PASSWORD_REGEX_MESSAGE,
            },
          ]}
          initialValue="admin@123"
        >
          <Input.Password placeholder="Type Your Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
