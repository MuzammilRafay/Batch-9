import React, { useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { UserApiService } from "../services/userService";
const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const PASSWORD_REGEX_MESSAGE =
  "Password should be contains at least one alphabet and contains at least one digit and is at least 8 characters long and should have special character.";

function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    UserApiService.registerUser(values)
      .then((data) => {
        console.log(data);
        form.resetFields();
        messageApi.open({
          type: "success",
          content: "User is registered successfully.",
        });
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>Register</Typography.Title>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input placeholder="Type your username" />
        </Form.Item>
        <Form.Item
          name="user_firstname"
          rules={[
            {
              required: true,
              message: "Please input your user_firstname",
            },
          ]}
        >
          <Input placeholder="Type your user firstname" />
        </Form.Item>

        <Form.Item
          name="user_lastname"
          rules={[
            {
              required: true,
              message: "Please input your user lastname",
            },
          ]}
        >
          <Input placeholder="Type your user lastname" />
        </Form.Item>

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
        >
          <Input.Password placeholder="Type Your Password" />
        </Form.Item>

        <Form.Item
          name="c_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your confirm password",
            },
            {
              pattern: PASSWORD_REGEX,
              message: PASSWORD_REGEX_MESSAGE,
            },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Type Your Confrim Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
