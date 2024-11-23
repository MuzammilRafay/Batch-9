import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { CategoryApiService } from "../../services/categoryService";
import { useNavigate, useParams } from "react-router-dom";

function CategoryAdd() {
  const { categoryId } = useParams();

  const isCategoryEditMode = categoryId ? true : false;
  // const isCategoryEditMode = Boolean(categoryId);

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  //jab jab isCategoryEditMode variable change ho ye function run hoga
  useEffect(() => {
    //agar ye edit k page par hai
    if (isCategoryEditMode) {
      setLoading(true);
      CategoryApiService.getCategoryById(categoryId)
        .then((data) => {
          const singleCategoryData = data?.results;

          //https://4x.ant.design/components/form/#FormInstance
          form.setFieldsValue({
            cat_title: singleCategoryData?.cat_title,
          });
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isCategoryEditMode]);

  const createCateoryFlow = (values) => {
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

  const updateCategoryFlow = (values) => {
    setLoading(true);
    CategoryApiService.updateCategory(categoryId, values)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Category is updated successfully.",
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
  const onFinish = (values) => {
    if (isCategoryEditMode) {
      //edit flow
      updateCategoryFlow(values);
    } else {
      //create category flow
      createCateoryFlow(values);
    }
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>
        {isCategoryEditMode ? "Edit" : "Add"} Category
      </Typography.Title>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        {/* {cat_title: "asdasdasd"} */}
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
          {isCategoryEditMode ? "Update" : "Add"} Category
        </Button>
      </Form>
    </div>
  );
}

export default CategoryAdd;
