import React, { useEffect, useState } from "react";
import CommonAdminListing from "../../components/CommonAdminListing/CommonAdminListing";
import { Button, Table } from "antd";
import { HelperFunction } from "../../utils/helperFunction";
import { UserApiService } from "../../services/userService";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    getUsers();
  }, []);

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
  return (
    <>
      <CommonAdminListing
        btnRender={<Button type="primary">Add User</Button>}
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
