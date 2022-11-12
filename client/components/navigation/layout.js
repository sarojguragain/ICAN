import React from "react";
import { Layout, Breadcrumb, BackTop, Affix, AutoComplete } from "antd";
import Headers from "./header";
import SideBar from "./sidebar";
import Footers from "./footer";
import Breadcrumbs from '../control/breadcrumbs'

const { Content, Sider, Footer, Header } = Layout;
import { ArrowUpOutlined } from "@ant-design/icons";

const NavLayout = (props) => {
  return (
    <Layout lassName="layout">
      <Headers className="header" />
      <Layout className="layout-sidebar">
        <SideBar />
        <Layout>
          <Content className="layout-content">

            {props.children}
            <BackTop className="backtop" placement="bottomRight">
              <div className="back-top">
                <ArrowUpOutlined />
              </div>
            </BackTop>
          </Content>
          <Footers />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default NavLayout;
