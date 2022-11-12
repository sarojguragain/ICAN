import React from "react";
import { Button, Col, Row } from "antd";
import AllUserTable from "../../components/Tables/all-users-table";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openAddModal } from "../../redux/user/action";
import AddUser from "../../components/Models/add-user-model";

const AllUser = () => {
  const dispatch = useDispatch();


const user = useSelector((state)=>state.AuthList.profile,shallowEqual);
const openModel = useSelector((state)=>state.UserList.isAddUser, shallowEqual);
console.log("OPEN MODEL",openModel)
const handleClick=()=>{
  
  dispatch(openAddModal());
}
  return (
    <>
      <div>
        <Row style={{margin:"10px"}}>
          <Col span={8}>
            <h3>All User</h3>
          </Col>
          {user.role?.role=="SuperAdmin"?
          <Col span={8} offset={8}>
            <Button  type="primary" style={{ float: "right" }} onClick={handleClick}>Add User</Button>
          </Col>:''}
          
        </Row>
      </div>
     {openModel? <AddUser />:''}
      <AllUserTable />
    </>
  );
};

export default AllUser;
