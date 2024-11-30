import React, { useEffect, useState } from "react";
import CommonAdminListing from "../../components/CommonAdminListing/CommonAdminListing";
import { Button, message, Modal, Table } from "antd";
import { HelperFunction } from "../../utils/helperFunction";
import { UserApiService } from "../../services/userService";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, messageHtml] = message.useMessage();
  const navigate = useNavigate();

  const getUsers = () => {
    setLoading(true);

    UserApiService.getUsers()
      .then((data) => {
        setUsers(data?.results);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userDeleteRequestFunction = (singleData) => {
    const userId = singleData?.user_id;
    setLoading(true);
    UserApiService.deleteUserById(userId)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "User is deleted successfully.",
        });
        getUsers();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUserDelete = (singleData) => {
    Modal.confirm({
      title: "Do you want to delete this user ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        userDeleteRequestFunction(singleData);
      },
    });
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "user_id",
    },
    {
      title: "Name",
      dataIndex: "username",
    },

    {
      title: "Firstname",
      dataIndex: "user_firstname",
    },
    {
      title: "Lastname",
      dataIndex: "user_lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Image",
      render: (singleUser) => {
        if (!singleUser?.user_image) {
          return "Image not found";
        }

        return <img src={singleUser?.user_image} width="80" />;
      },
    },
    {
      title: "Role",
      dataIndex: "user_role",
    },

    {
      title: "Edit",
      render: (singleData) => {
        return (
          <Button
            type="primary"
            // onClick={() => {
            //   navigate(`/categories/edit/${singleData?.cat_id}`);
            // }}
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
            loading={loading}
          >
            Delete
          </Button>
        );
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
      render: (singleData) => {
        return HelperFunction.convertDateToOurFormat(singleData?.updated_at);
      },
    },
  ];

  return (
    <>
      {messageHtml}
      <CommonAdminListing
        btnRender={
          <Button
            type="primary"
            onClick={() => {
              navigate("/users/create");
            }}
          >
            Add User
          </Button>
        }
        tableRender={
          <Table
            loading={loading}
            dataSource={users}
            columns={columns}
            bordered
          />
        }
        title="Users"
      />
    </>
  );
}

export default Users;
