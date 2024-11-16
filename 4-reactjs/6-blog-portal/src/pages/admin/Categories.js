import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { CategoryApiService } from "../../services/categoryService";
import { HelperFunction } from "../../utils/helperFunction";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //intial load
    getCategories();
  }, []);

  const getCategories = () => {
    setLoading(true);

    CategoryApiService.getCategories()
      .then((data) => {
        setCategories(data?.results);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  const columns = [
    {
      title: "Category Id",
      render: (singleData) => {
        return singleData?.cat_id;
      },
    },
    {
      title: "Name",
      render: (singleData) => {
        return singleData?.cat_title;
      },
    },
    {
      title: "Created At",
      render: (singleData) => {
        return HelperFunction.convertDateToOurFormat(singleData?.created_at);
      },
    },
    {
      title: "Edit",
      render: () => {
        return <Button type="primary">Edit</Button>;
      },
    },
    {
      title: "Delete",
      render: () => {
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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <h2 style={{ margin: 0 }}>Categories</h2>

        <Button type="primary">Add Category</Button>
      </div>
      <Table
        dataSource={categories}
        columns={columns}
        loading={loading}
        bordered
      />
      ;
    </div>
  );
}

export default Categories;
