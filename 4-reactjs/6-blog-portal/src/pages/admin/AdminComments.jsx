import { Button, message, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { CategoryApiService } from "../../services/categoryService";
import { HelperFunction } from "../../utils/helperFunction";
import { useNavigate } from "react-router-dom";
import CommonAdminListing from "../../components/CommonAdminListing/CommonAdminListing";
import { CommentApiService } from "../../services/CommentApiService";

function AdminComments() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //intial load
    getComments();
  }, []);

  const getComments = () => {
    setLoading(true);

    CommentApiService.getComments()
      .then((data) => {
        setComments(data?.results);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  const columns = [
    {
      title: "Comment ID",
      dataIndex: "comment_id",
    },
    {
      title: "Post",
      dataIndex: ["post", "post_title"],
      render: (text) => (text ? text : "--"),
    },
    {
      title: "User",
      dataIndex: ["user", "username"],
      render: (text) => (text ? text : "--"),
    },
    {
      title: "Comment Status",
      key: "commentStatus",
      render: (singleData) => {
        if (singleData?.comment_status === "approved") {
          return (
            <Button type="primary">
              {singleData?.comment_status?.toUpperCase()}
            </Button>
          );
        } else {
          return (
            <Button type="default" danger>
              {singleData?.comment_status?.toUpperCase()}
            </Button>
          );
        }
      },
    },
    {
      title: "Created At",
      render: (singleData) => {
        return HelperFunction.convertDateToOurFormat(singleData?.created_at);
      },
    },
    {
      title: "Updated At",
      key: "updatedAt",
      render: (singleData) => {
        return HelperFunction.convertDateToOurFormat(singleData.updated_at);
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (singleData) => {
        return (
          <Button
            type="primary"
            style={{
              background: "red",
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <>
      {contextHolder}
      <CommonAdminListing
        title="Comments"
        tableRender={
          <Table
            dataSource={comments}
            columns={columns}
            loading={loading}
            bordered
          />
        }
      />
    </>
  );
}

export default AdminComments;
