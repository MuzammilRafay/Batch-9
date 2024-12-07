import React from "react";
import {
  UserOutlined,
  LineChartOutlined,
  AlignCenterOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthUtils } from "../../../utils/AuthUtils";

const { Header, Content, Footer, Sider } = Layout;
// https://ant.design/~demos/layout-demo-side
const items = [
  {
    key: 1,
    icon: <LineChartOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: 2,
    icon: <AlignCenterOutlined />,
    label: <Link to="/categories">Categories</Link>,
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: <Link to="/users">Users</Link>,
  },
  {
    key: 4,
    icon: <BookOutlined />,
    label: <Link to="/posts">Posts</Link>,
  },
  {
    key: 5,
    icon: <BookOutlined />,
    label: <Link to="#">Comments</Link>,
  },
  {
    key: 6,
    icon: <LogoutOutlined />,
    label: (
      <div
        onClick={() => {
          AuthUtils.removeToken();
          window.location.href = "/";
        }}
      >
        Logout
      </div>
    ),
  },
];

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            marginTop: 40,
          }}
        />
        <div
          style={{
            marginLeft: 30,
          }}
        >
          <Button
            type="primary"
            style={{
              width: "80%",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowX: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
