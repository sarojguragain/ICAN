import { Layout, Menu } from "antd";
import { Avatar, Image } from 'antd';
import { LeftCircleFilled, UserOutlined } from '@ant-design/icons';


import React from "react";
const { Header } = Layout;

const Headers = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Avatar
      style={{
        alignItems:"center",
        float:"right",
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
        {/* <img src="https://en.ican.org.np/en/images/banner_logo.jpg" alt="" />
      </div> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(10).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
     
    </Header>
  );
};

export default Headers;
