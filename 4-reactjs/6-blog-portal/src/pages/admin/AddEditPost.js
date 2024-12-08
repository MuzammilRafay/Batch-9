import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";
import useCategories from "../../hooks/useCategories";
import CustomUpload from "../../components/CustomUpload/CustomUpload";
import { PostApiService } from "../../services/PostApiService";
import { useNavigate } from "react-router-dom";

function AddEditPost() {
  const [messageApi, contextHolder] = message.useMessage();
  const { categories, loading, setLoading } = useCategories();
  const [fileObject, setFileObject] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    // values -> all-form-fields {post_title: "asdasd",post_author: "asdasda"}
    // form.resetFields(); ->empty-all-field-function
    // console.log(values, "values");

    setLoading(true);

    const formData = new FormData();
    // formData.append('post_title',values?.post_title);

    Object.keys(values).map((singleKey) => {
      formData.append(singleKey, values[singleKey]);
    });

    if (fileObject) {
      formData.append("post_image", fileObject);
    }

    PostApiService.createPost(formData)
      .then(() => {
        form.resetFields(); // empty form input fields
        messageApi.open({
          type: "success",
          content: "Post is created successfully.",
        });
        setTimeout(() => {
          navigate("/posts");
        }, 2000);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  /*
    {
    "post_title": "",
    "post_category_id": "",
    "post_author": "",
    "post_date": "",
    "post_content": "",
    "post_status": "",
    "post_tags": "",
    "post_image": ""
    }
  */

  const customRequestCallback = (binaryFileObject) => {
    console.log(binaryFileObject, "binary file object");
    setFileObject(binaryFileObject);
  };
  return (
    <div>
      {contextHolder}
      <Typography.Title level={3}>Add Post</Typography.Title>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        {/* {post_title: "asdasdasd"} */}
        <Form.Item
          name="post_title"
          rules={[
            {
              required: true,
              message: "Please input your post title",
            },
          ]}
        >
          <Input placeholder="Post title" />
        </Form.Item>

        <Form.Item
          name="post_author"
          rules={[
            {
              required: true,
              message: "Please input your post author",
            },
          ]}
        >
          <Input placeholder="Post author" />
        </Form.Item>

        <Form.Item
          name="post_category_id"
          rules={[
            {
              required: true,
              message: "Please input your post category id!",
            },
          ]}
        >
          <Select placeholder="Post Category" loading={loading}>
            {categories?.map((singleCategory) => {
              return (
                <Select.Option value={singleCategory.cat_id}>
                  {singleCategory.cat_title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="post_date"
          rules={[
            {
              required: true,
              message: "Please input your post date!",
            },
          ]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item
          name="post_content"
          rules={[
            {
              required: true,
              message: "Please input your post content!",
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Post Content" />
        </Form.Item>

        <Form.Item
          name="post_status"
          rules={[
            {
              required: true,
              message: "Please input your post status!",
            },
          ]}
        >
          <Select placeholder="Post Status">
            <Select.Option value="draft">Draft</Select.Option>
            <Select.Option value="publish">Publish</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="post_tags"
          rules={[
            {
              required: true,
              message: "Please input your post tags !",
            },
          ]}
        >
          <Input placeholder="Post Tags " />
        </Form.Item>

        <div style={{ marginTop: 10, marginBottom: 20 }}>
          <h4>Post Image</h4>
          <CustomUpload customRequestCallback={customRequestCallback} />
        </div>

        <Button type="primary" htmlType="submit" loading={loading}>
          Add Post
        </Button>
      </Form>
    </div>
  );
}

export default AddEditPost;
