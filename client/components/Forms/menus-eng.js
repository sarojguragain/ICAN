import { Form, Button, Select, InputNumber, Radio, Input, Upload } from "antd";
import React, { useState } from "react";
import TextInput from "../control/text-input";
const { Option } = Select;
import { UploadOutlined } from "@ant-design/icons";
import TextEditor from "../control/wysiwyg";
import Ckeditor from "../control/ckEditor";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


















const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const fileList = [];

const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const MenuFormEng = () => {

  const [menu, setMenu] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [pageStatus, setPageStatus]= useState('');
  const [parentPage, setPatentPage] = useState('');
  const [menuOrder, setMenuOrder]=useState('');
  const [pageType, setPageType] = useState('');
  const [featuredImage , setFeaturedImage] = useState('');
  const [metaTitle, setMetaTitle]= useState('');
  const [metaDescription, setMetaDescription] =  useState('');
  const [metaKeyword, setMetaKeyword] = useState('');
  const [ Categories, setCategories]= useState('');



  const onFinish = (values) => {
    console.log(values);
  };
  const [value, setValue] = useState("A");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{ width: "60vw" }}
        autoComplete="off"
        width="60px"
      >
        <Form.Item label="MENU">
          <Select
            defaultValue="Main Menu"
            label="MENU"
            // onChange={handleChange}
          >
            <Option value="Main Menu">Main Menu</Option>
            <Option value="disable">Disable</Option>
          </Select>
        </Form.Item>

        <TextInput label="Page Title" />

        <Form.Item label="Page Status">
          <Select
            defaultValue="Published"

            // onChange={handleChange}
          >
            <Option value="published">Published</Option>
            <Option value="unpublished">Unublished</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Parent Page">
          <Select
            defaultValue="test--Main"

            // onChange={handleChange}
          >
            <Option value="test">test--Main</Option>
            {children}
          </Select>
        </Form.Item>

        <TextInput label="Menu Order" />

        <Form.Item label="Page Type">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Content</Radio>
            <Radio value={2}>Link</Radio>
            <Radio value={3}>File</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Page Description">
          <Ckeditor placeholder="Add Page Description" />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Feature Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action="http://localhost:5000/api/image-upload"
            listType="picture"
            defaultFileList={[...fileList]}
            className="upload-list-inline"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <TextInput label="Meta Title" />
        <TextInput label="Meta Keyword" />
        <Form.Item label="Meta Description">
          <Ckeditor  placeholder="Add Meta Description" />
        </Form.Item>
        <Form.Item label="Categories">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            // onChange={handleChange}
          >
            {children}
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MenuFormEng;
