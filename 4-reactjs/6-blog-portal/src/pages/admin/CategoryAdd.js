import React, { useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { CategoryApiService } from "../../services/categoryService";
import { useNavigate } from "react-router-dom";

function CategoryAdd() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    CategoryApiService.createCategory(values)
      .then(() => {
        form.resetFields(); // empty form input fields
        messageApi.open({
          type: "success",
          content: "Category is created successfully.",
        });
        setTimeout(() => {
          navigate("/categories");
        }, 2000);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>Add Category</Typography.Title>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="cat_title"
          rules={[
            {
              required: true,
              message: "Please input your category title",
            },
          ]}
        >
          <Input placeholder="Type your category title" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading}>
          Add Category
        </Button>
      </Form>
    </div>
  );
}

export default CategoryAdd;
