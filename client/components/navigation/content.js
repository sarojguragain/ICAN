import React from 'react'
const {Content } = Layout;
import { Layout,  Breadcrumb, BackTop } from "antd";
import {
  ArrowUpOutlined
} from "@ant-design/icons";



const Contents = () => {
  return (
    <>
    <Breadcrumb sub="list" className="breadcrumbs"  />
     <Content className="content">
          {props.children}
          <BackTop placement="bottomRight">
            <div style={style}>
              <ArrowUpOutlined />
            </div>
          </BackTop>
        </Content>
    </>
   
  )
}

export default Contents