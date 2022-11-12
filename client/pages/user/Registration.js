import React from "react";
import TextInput from "../../components/control/text-input";
import { Row, Col, Card, Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { login, UserRegistration } from "../../redux/user/action";

const Registration = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(UserRegistration(values));
  };

  const onFinishFailed = (errorInfo) => {
  message.error( errorInfo);
  };
  return (
    <>
      <Row className="Login_container">
        <Col
          xs={{
            span: 24,
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
          <Card title="Admins Registration" bordered={true}>
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
                rules={[
                  {
                    required: true,
                    message: "Username is required!",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Conform Password" />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
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

export default Registration;
