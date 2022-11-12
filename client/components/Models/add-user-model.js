import { Form, Modal } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { closeAddModal } from "../../redux/user/action";
import ConformPasswordInput from "../control/conform-password";
import PasswordInput from "../control/password";
import PhoneInput from "../control/phone-number";
import TextInput from "../control/text-input";

const AddUser = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();


  const [visible, setVisible] = useState(visible);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const ModelStatus = useSelector(
    (state) => state.UserList.isAddUser,
    shallowEqual
  );

  const handleOk = () => {
    console.log("HI");
    dispatch(closeAddModal());
  };

  const handleCancel = () => {
    console.log("HEllo");
    dispatch(closeAddModal());
  };
  useEffect(() => {
    setIsModelOpen(true);
  }, []);

  useEffect(() => {
    setVisible(ModelStatus);
  }, [ModelStatus]);

  return (
    <>
      <Modal
        title="Edit User"
        centered
        visible={visible}
        open={isModelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Form
         name="basic"
        //  labelCol={{
        //    span: 8,
        //  }}
        //  wrapperCol={{
        //    span: 16,
        //  }}
         initialValues={{
           remember: true,
         }}
         
         autoComplete="off"
         form={form}
        >
          <TextInput
          label="Name"
          name="name"
          form={form}
          // value={user.name}
          // onChange={editUser}
        />
        <TextInput
        label="Email"
        name='email'
        form={form}
        />
        <PhoneInput
        label="Phone"
        name="phone"
        form={form}
        />
        <PasswordInput />
        <ConformPasswordInput />
        </Form>
      </Modal>
    </>
  );
};

export default AddUser;
