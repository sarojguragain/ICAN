import React from 'react'
import { Layout } from 'antd'
import Headers from './header'
import SideBar from './sidebar'
import Footer from './footer';
const { Content} = Layout;

const NavLayout = (props) => {
  return (
    <Layout className="layout">
    <Headers />
    <Layout>
        < SideBar/>
        <Content className="content">
            {props.children}
        </Content>     

    </Layout>
    <Footer />
</Layout>
  )
}
export default NavLayout