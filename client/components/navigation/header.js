import React from "react";
import {
  AntDesignOutlined,
  RedoOutlined,
  UserOutlined , 
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Menu,Layout, Button, Avatar, Row, Col,Image, Dropdown } from "antd";
import HeaderLogo from './banner_logo.jpg'
import { userLogout } from "../../redux/auth/action";

const { Header, Footer, Sider, Content } = Layout;



const Headers = () => {
// const users = useSelector((state)=>state.LoginList.profile)
// console.log("USERS",users)
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(userLogout());
  };
  const menu = (
    <>
    <Menu
      items={[
        {
          key: 'profile',
          label:( <Link href="/user/profile">
             <Button className="profile-dialog"  block>
             <UserOutlined /> Profile
            </Button> 
            </Link>)

        },
        {
          key: 'change-password',
          label:(  <Link href="/user/changePassword">
          <Button className="profile-dialog"  block>
          <RedoOutlined /> Change Password
         </Button> 
         </Link>)
        },
        {
          key: '3',
          label: ( <Link href="/">
          <Button className="profile-dialog" onClick={onLogout} block>
            <LogoutOutlined /> Logout
          </Button>
        </Link>),
        },
      ]}
    />
    </>
  );

  return (
    <>
      <Row className="header">
        <Col
          xs={{ span: 17 }}
          sm={{ span: 17 }}
          md={{ span: 17 }}
          lg={{ span: 16 }}
        >

<Image
    width={20}
    src="./banner_logo.jpg"
  /><Avatar src={HeaderLogo} alt="Not Found" className="ird-logo"/>

        </Col>

        <Col
          xs={{ span: 6, offset: 1 }}
          sm={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          <div className="dropdown-header">
          <Dropdown overlay={menu} placement="bottomRight">
          
          <Avatar
              style={{ margin: "10px",backgroundColor:'#001529'}}
              size={{ xs: 12, sm: 24, md: 30, lg: 36, xl: 48, xxl: 60 }}
              icon={<AntDesignOutlined />}
            />
        </Dropdown>
          </div>
         
        </Col>
      </Row>
    </>
  );
};
export default Headers;
