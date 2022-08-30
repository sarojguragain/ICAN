import React from "react";
import TextInput from "../../components/control/text-input";
import { Row, Col, Card, Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/action";

const Login = () => {
const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row className="Login_container">
        <Col
          xs={{
            span: 24
          }}
          sm={{
            span: 24,
          }}
          md={{
            span: 12,
            offset: 6,
          }}
          lg={{
            span: 15,
            offset: 6,
          }}
          xl={{
            span: 12,
            offset: 6,
          }}
         
          
        >
          <Card
            title="Admins Login"
            bordered={true}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                placeholder="username / Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Username / Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        
      </Row>
    </>
  );
};

export default Login;
