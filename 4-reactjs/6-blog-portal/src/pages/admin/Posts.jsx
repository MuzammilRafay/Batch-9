import React from "react";
import CommonAdminListing from "../../components/CommonAdminListing/CommonAdminListing";
import { Button, message, Modal, Table } from "antd";
import { HelperFunction } from "../../utils/helperFunction";
import usePosts from "../../hooks/usePosts";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { PostApiService } from "../../services/PostApiService";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { loader, postData, setLoader: setLoading, getPosts } = usePosts();
  const [messageApi, messageHtml] = message.useMessage();
  const navigate = useNavigate();

  const postDeleteRequestFunction = (singleData) => {
    const postId = singleData?.id;
    setLoading(true);
    PostApiService.deletePostById(postId)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Post is deleted successfully.",
        });
        getPosts();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUserDelete = (singleData) => {
    Modal.confirm({
      title: "Do you want to delete this post ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        postDeleteRequestFunction(singleData);
      },
    });
  };
  return (
    <>
      {messageHtml}

      <CommonAdminListing
        btnRender={
          <Button
            type="primary"
            onClick={() => {
              navigate("/posts/create");
            }}
          >
            Add Post
          </Button>
        }
        tableRender={
          <Table
            loading={loader}
            dataSource={postData}
            columns={[
              {
                title: "Id",
                dataIndex: "id",
              },
              {
                title: "Post Title",
                dataIndex: "post_title",
              },
              {
                title: "Post Author",
                dataIndex: "post_author",
              },

              {
                title: "Post Status",
                dataIndex: "post_status",
              },

              {
                title: "Image",
                render: (singlePost) => {
                  if (!singlePost?.image) {
                    return "Image not found";
                  }

                  return <img src={singlePost?.image} width="80" />;
                },
              },
              {
                title: "Post Date",
                render: (singleData) => {
                  return HelperFunction.convertDateToOurFormat(
                    singleData?.post_date
                  );
                },
              },

              {
                title: "Edit",
                render: (singleData) => {
                  return (
                    <Button
                      type="primary"
                      onClick={() => {
                        navigate(`/posts/edit/${singleData?.id}`);
                      }}
                    >
                      Edit
                    </Button>
                  );
                },
              },
              {
                title: "Delete",
                render: (singleData) => {
                  return (
                    <Button
                      type="primary"
                      style={{
                        background: "red",
                      }}
                      onClick={() => handleUserDelete(singleData)}
                      loading={loader}
                    >
                      Delete
                    </Button>
                  );
                },
              },
              {
                title: "Created At",
                render: (singleData) => {
                  return HelperFunction.convertDateToOurFormat(
                    singleData?.created_at
                  );
                },
              },
              {
                title: "Updated At",
                render: (singleData) => {
                  return HelperFunction.convertDateToOurFormat(
                    singleData?.updated_at
                  );
                },
              },
            ]}
            bordered
          />
        }
        title="Posts"
      />
    </>
  );
}

export default Posts;
