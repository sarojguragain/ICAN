import React, { useEffect,useState } from "react";
import { Table, Space, Popconfirm, message } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  DeleteUser,
  editableUser,
  GetUsers,
  openModal,
} from "../../redux/user/action";
import {
  DeleteOutlined,
  QuestionCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Switcher from "../control/switcher";
import ButtonDel from "../control/button";
import UserEdit from "../Models/user-edit-model";

const AllUserTable = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState();
  const users = useSelector((state) => state.UserList.users, shallowEqual);
  const editableId = useSelector(
    (state) => state.UserList.EditableId,
    shallowEqual
  );
  const AuthUser = useSelector((state)=>state.AuthList.profile,shallowEqual);


  const cancel = (e) => {
    message.error("Click on No");
  };
  const confirm = (id) => {
    dispatch(DeleteUser(id));
    dispatch(GetUsers());
  };

  const showModal = (id) => {
    dispatch(editableUser(id));
  dispatch(openModal(id));
   
  };

  //use Effects
  useEffect(() => {
    setLoad(0);
    dispatch(GetUsers());
  }, []);
  useEffect(() => {
  setTimeout(()=>{
    if(load<100){
      setLoad(load +1);
    }
  })
  }, [load]);


  const columns = AuthUser.role?.role==="SuperAdmin"?[
    { title: "SN", dataIndex: "sn", key: "sn" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Switcher value={record.id} name="userStatus" status={record.status} />
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ButtonDel
            label="Edit"
            value={record.id}
            disabled={AuthUser.role.role!=="SuperAdmin"?true:false}
            onClick={() => showModal(record.id)}
            icon=<EditOutlined />
          />

          <Popconfirm
            title="Are you sure to delete ?"
            onConfirm={() => confirm(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            value={record.id}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
          >
            <ButtonDel
              label="Delete"
              disabled={AuthUser.role.role!=="SuperAdmin"?true:false}
              value={record.id}
              danger="danger"
              icon=<DeleteOutlined />
            />
          </Popconfirm>
        </Space>
      ),
    },
  ]:
  [
    { title: "SN", dataIndex: "sn", key: "sn" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
  ] ;

  const data = [];
  users.map((user, index) => {
    data.push({
      key: index,
      sn: index + 1,
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      status: user.status,
      createdAt: user.createdAt,
    });
  });

  return (
    <>
    {editableId!=null ?<UserEdit />:'' }
      <Table columns={columns} dataSource={load<100?'':data} loading={{spinning:load<100?true:false}} />
    </>
  );
};

export default AllUserTable;
