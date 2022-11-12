import { Layout, Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import menu from "./menu.json";

const { SubMenu } = Menu;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const menus = menu.menu;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (menus.map((x) => x.title).indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <Sider
      className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          {!!menus &&
            menus.map((men, i) => {
              if (!men.children) {
                return (
                  <Menu.Item
                    key={men.title}
                    // icon={<Icon type={men.icon} />}
                    className="menu-item"
                  >
                    <Link href={men.url}>{men.title}</Link>
                  </Menu.Item>
                );
              }

              if (men.children) {
                return (
                  <SubMenu
                    key={men.title}
                    title={men.title}
                    // icon={<Icon type={men.icon} />}
                    className="menu-item"
                  >
                    {men.children.map((item, i) => {
                      return (
                        <Menu.Item key={item.title} className="menu-item">
                          <Link href={item.url}>{item.title}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
            })}
        </Menu>
      </Sider>
    </>
  );
};

export default SideBar;
