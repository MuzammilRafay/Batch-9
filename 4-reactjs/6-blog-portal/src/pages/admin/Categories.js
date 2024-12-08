import { Button, message, Modal, Table } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { CategoryApiService } from "../../services/categoryService";
import { HelperFunction } from "../../utils/helperFunction";
import { useNavigate } from "react-router-dom";
import CommonAdminListing from "../../components/CommonAdminListing/CommonAdminListing";
import useCategories from "../../hooks/useCategories";

function Categories() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const { categories, loading, setLoading, getCategories } = useCategories();

  const categoryDeleteRequestFunction = (singleData) => {
    const categoryId = singleData?.cat_id;
    setLoading(true);
    CategoryApiService.deleteCategoryById(categoryId)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Category is deleted successfully.",
        });
        getCategories();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCategoryDelete = (singleData) => {
    Modal.confirm({
      title: "Do you want to delete this category ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        categoryDeleteRequestFunction(singleData);
      },
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
      render: (singleData) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              navigate(`/categories/edit/${singleData?.cat_id}`);
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
            onClick={() => handleCategoryDelete(singleData)}
            loading={loading}
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
        btnRender={
          <Button
            type="primary"
            onClick={() => {
              navigate("/categories/create");
            }}
          >
            Add Category
          </Button>
        }
        tableRender={
          <Table
            dataSource={categories}
            columns={columns}
            loading={loading}
            bordered
          />
        }
      />
    </>
  );
}

export default Categories;
