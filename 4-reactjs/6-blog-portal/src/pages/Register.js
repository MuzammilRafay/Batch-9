import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { UserApiService } from "../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import CustomUpload from "../components/CustomUpload/CustomUpload";
const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const PASSWORD_REGEX_MESSAGE =
  "Password should be contains at least one alphabet and contains at least one digit and is at least 8 characters long and should have special character.";

function Register({ isUserModule = false }) {
  const { userId } = useParams();
  const isUserEditMode = Boolean(userId);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileObject, setFileObject] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId && isUserEditMode) {
      setLoading(true);
      UserApiService.getUserById(userId)
        .then((data) => {
          /*
{
    "user_id": 525,
    "username": "Helena Hettinger",
    "user_firstname": "Prof. Jaylin Strosin IV",
    "user_lastname": "Alexys Brakus",
    "email": "oswaldo.rau@example.net",
    "user_image": "https://via.placeholder.com/640x480.png/00ff33?text=eos",
    "user_role": "Admin",
    "token": "",
    "is_online": 0,
    "created_at": "2024-11-06T16:49:37.000000Z",
    "updated_at": "2024-11-06T16:49:37.000000Z"
}

          */
          const singleUser = data?.results;
          form.setFieldsValue({
            username: singleUser?.username,
            user_firstname: singleUser?.user_firstname,
            user_lastname: singleUser?.user_lastname,
            email: singleUser?.email,
          });
          console.log(data, "data");
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId]);

  const createUserFunction = (formData) => {
    UserApiService.registerUser(formData)
      .then(() => {
        form.resetFields(); // empty form input fields
        messageApi.open({
          type: "success",
          content: `User is ${
            isUserModule ? "created" : "registered"
          } successfully.`,
        });

        if (isUserModule) {
          navigate("/users");
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  const updateUserFunction = (formData) => {
    UserApiService.updateUser(userId, formData)
      .then(() => {
        form.resetFields(); // empty form input fields
        messageApi.open({
          type: "success",
          content: `User is updated successfully.`,
        });

        if (isUserModule) {
          navigate("/users");
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  const onFinish = (values) => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(values).map((singleKey) => {
      formData.append(singleKey, values[singleKey]);
    });

    if (fileObject) {
      formData.append("user_image", fileObject);
    }

    if (isUserEditMode) {
      //edit wala function
      updateUserFunction(formData);
    } else {
      createUserFunction(formData);
    }
  };

  const customRequestCallback = (binaryFileObject) => {
    setFileObject(binaryFileObject);
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>
        {isUserModule
          ? isUserEditMode
            ? "Edit User "
            : "Create User"
          : "Register"}
      </Typography.Title>

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

        {!isUserEditMode && (
          <>
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
                // {
                //   pattern: PASSWORD_REGEX,
                //   message: PASSWORD_REGEX_MESSAGE,
                // },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Type Your Confrim Password" />
            </Form.Item>
          </>
        )}

        <div style={{ marginTop: 10, marginBottom: 20 }}>
          <h4>Upload User Image</h4>
          <CustomUpload customRequestCallback={customRequestCallback} />
        </div>

        {/* {true ? true ? "tu ye" : "warna ye" : "wrna yee"} */}

        <Button type="primary" htmlType="submit" loading={loading}>
          {isUserModule
            ? isUserEditMode
              ? "Update User"
              : "Create User"
            : "Register"}
        </Button>
      </Form>
    </div>
  );
}

export default Register;
