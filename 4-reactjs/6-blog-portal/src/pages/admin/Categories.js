import { Table } from "antd";
import React from "react";

function Categories() {
  const dataSource = [
    {
      categoryId: "1",
      name: "Mike",
    },
    {
      categoryId: "2",
      name: "John",
    },
  ];

  const columns = [
    {
      title: "Category Id",
      dataIndex: "categoryId",
      key: "categoryId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  return (
    <div>
      <h2>Categories</h2>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default Categories;
