import { put, takeEvery, call } from "redux-saga/effects";
import { httpGetUsers, httpUserRemove, httpUserStatus,httpGetUserById, httpEditingUser } from "../http/user";
import {  getRolesSuccess, GetUserByIdSuccess, GetUsersSuccess } from "./action";
import { actionTypes } from "./type";
import { message } from "antd";
import { httpGetRoles } from "../http/role";


function* getUsers() {
  try {
    const user = yield call(httpGetUsers);
    yield put(GetUsersSuccess(user.data.data));
  } catch (err) {
    message.error({content:err.message})
  }
}


function* changeUserStatus(action) {
  const token = localStorage.token;
  const headerParams = {
    Authorization: `bearer ${token}`,
  };
  try {
  
    const response = yield call(httpUserStatus, action.payload,headerParams);
    if(response.status===204){
      message.success({content: "User activity staus  changed" });
    }else{
      message.error({content:err.message});
    }   
    
  } catch (err) {
    message.error({content:err.message})  }
}

function*deleteUser(action)
{
  const token = localStorage.token;
  const headerParams={
    Authorization:`bearer ${token}`,
  };
  try{
    const user = yield call(httpUserRemove,action.payload,headerParams);
    const data = user.data;
    if(data.status== 200){
      message.success(data.message)
    }else{
      message.error(data.message)
    }
    
  }catch(err)
  {
    message.error({content:err.message})
  }
}

function* getUserById(action)
{
  const token = localStorage.token;
  const headerParams={
    Authorization:`bearer ${token}`,
  };

  try{
    const user = yield call(httpGetUserById,action.payload,headerParams);
    yield put(GetUserByIdSuccess(user.data));
  }
  catch(err){
    message.error({content:err.message});
  }
}
function*getRoles(action)
{
  try{
    const response = yield call(httpGetRoles);
    yield put(getRolesSuccess(response.data.data));
  }catch(err){
    message.error({content:err.message});
  }
}
function*editingUser(action){
  console.log("SAGA", action)
  try {
    console.log("EDITING USER", action.payload);
    const response = yield call(httpEditingUser,action.payload);
    if(response.status===204){
      message.success({content:" Updated Successfully"});
    }else{
      message.error({content:err.message});

    }   
  } catch (err) {
    message.error({content:err.message});
  }
}


function* userSaga() {
  yield takeEvery(actionTypes.GET_USERS, getUsers);
  yield takeEvery(actionTypes.GET_ROLES,getRoles);
  yield takeEvery(actionTypes.CHANGE_USER_STATUS, changeUserStatus);
  yield takeEvery(actionTypes.DELETE_USER,deleteUser);
  yield takeEvery(actionTypes.GET_USER_BY_ID,getUserById);
  yield takeEvery(actionTypes.EDITING_USER,editingUser)
 }

export default userSaga;
