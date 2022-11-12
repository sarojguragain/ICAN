import { message, Modal, Form } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { closeModal, EditingUser, editUser, GetUsers } from "../../redux/user/action";
import RolePicker from "../Pickers/role-picker";
import TextInput from "../control/text-input";
import PhoneInput from "../control/phone-number";

const UserEdit = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  //use State
  const [visible, setVisible] = useState(visible);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //use Selector
  const user = useSelector((state) => state.UserList.user, shallowEqual);
  const modalStatus = useSelector((state) => state.UserList.isOpen,shallowEqual);

  const handleOk = () => {
    dispatch(EditingUser(user));
    dispatch(closeModal());
    form.resetFields();
    setIsModalOpen(false);
    dispatch(GetUsers());
  };

  const handleCancel = () => {
    form.resetFields();
    dispatch(closeModal());
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    message.success("EDIT");
  };

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  };

  // end of action function

  // use Effect
  useEffect(() => {
    setVisible(modalStatus);
  }, [modalStatus]);


 
  return (
    <Modal
      title="Edit User"
      centered
      visible={visible}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
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
        form={form}
      >
        <TextInput
          label="Name"
          name="name"
          form={form}
          value={user.name}
          onChange={editUser}
        />
        <TextInput
          label="Email"
          name="email"
          form={form}
          value={user.email}
          onChange={editUser}
          type="email"
        />

        <PhoneInput
          label="Phone"
          name="phone"
          form={form}
          value={user?.phone}
          onChange={editUser}
        />
        <RolePicker
          name="role"
          form={form}
          values={user.Role?.id}
          label="Role"
          onChange={editUser}
        />
      </Form>
    </Modal>
  );
};

export default UserEdit;
