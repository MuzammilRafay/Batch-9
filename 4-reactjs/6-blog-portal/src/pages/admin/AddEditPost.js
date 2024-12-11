import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import useCategories from "../../hooks/useCategories";
import CustomUpload from "../../components/CustomUpload/CustomUpload";
import { PostApiService } from "../../services/PostApiService";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

function AddEditPost() {
  const { postId } = useParams();

  // const isPostEditMode = postId ? true : false;
  const isPostEditMode = Boolean(postId);

  const [messageApi, contextHolder] = message.useMessage();
  const { categories, loading, setLoading } = useCategories();
  const [fileObject, setFileObject] = useState(null);
  const [singlePost, setSinglePost] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      setLoading(true);
      PostApiService.getPostById(postId)
        .then((data) => {
          /*
          {
              "id": 1045,
              "post_category_id": 513,
              "post_title": "Xzavier Hartmann MD",
              "post_author": "Sandrine Ankunding",
              "post_date": "2014-11-01 05:38:11",
              "image": "https://via.placeholder.com/640x480.png/005555?text=ipsa",
              "post_content": "Nobis tenetur perspiciatis dicta sequi et impedit. Dicta voluptas pariatur dolor nesciunt. Aspernatur incidunt necessitatibus iste labore.",
              "post_tags": "Gerson Waters",
              "post_status": "draft",
              "created_at": "2024-11-06T16:49:37.000000Z",
              "updated_at": "2024-11-06T16:49:37.000000Z",
              "category": null,
              "comments": []
          }
          */
          // console.log(data?.results);
          setSinglePost(data?.results);
          const {
            post_title,
            post_category_id,
            post_author,
            post_date,
            post_content,
            post_status,
            post_tags,
          } = data?.results;
          form.setFieldsValue({
            post_title: post_title,
            post_category_id: post_category_id,
            post_author: post_author,
            post_date: dayjs(post_date),
            post_content: post_content,
            post_status: post_status,
            post_tags: post_tags,
            // post_tags,
            // post_image: "",
          });
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [postId]);

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

    isPostEditMode
      ? PostApiService.updatePostById(postId, formData)
      : PostApiService.createPost(formData)
          .then(() => {
            form.resetFields(); // empty form input fields
            messageApi.open({
              type: "success",
              content: `Post is ${
                isPostEditMode ? "updated" : "created"
              } successfully.`,
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
      <Typography.Title level={3}>
        {isPostEditMode ? "Edit" : "Add"} Post
      </Typography.Title>

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

          {singlePost?.image && (
            <div>
              <img
                src={singlePost?.image}
                alt={singlePost?.post_title}
                width="80"
                style={{
                  marginBottom: 20,
                }}
              />
            </div>
          )}
          <CustomUpload customRequestCallback={customRequestCallback} />
        </div>

        <Button type="primary" htmlType="submit" loading={loading}>
          {isPostEditMode ? "Update" : "Create"} Post
        </Button>
      </Form>
    </div>
  );
}

export default AddEditPost;
