import "./sider.css";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  DropboxOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;

const SiderComponent = ({ collapsed }) => {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Title level={3} className="text-center pt-3">
          <span className="text-white">Ecommerce</span>
        </Title>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <DropboxOutlined />,
              label: (
                <NavLink end className={"sidebar__link"} to="/dashboard">
                  Products
                </NavLink>
              ),
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: (
                <NavLink className={"sidebar__link"} to="/dashboard/users">
                  Users
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default SiderComponent;
