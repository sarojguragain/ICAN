import { actionTypes } from "./type";
import axios from "axios";

export const GetUsers = () => {
  return {
    type: actionTypes.GET_USERS,
  };
};
export const GetUsersSuccess = (data) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: data,
  };
};
export const GetUserById =(id)=>{
  return{
    type:actionTypes.GET_USER_BY_ID,
    payload:id
  }
}
export const GetUserByIdSuccess = (data)=>{
  return{
    type:actionTypes.GET_USER_BY_ID_SUCCESS,
    payload:data
  }
}

export const changeUserStatus = (id) => {
  return {
    type: actionTypes.CHANGE_USER_STATUS,
    payload: id,
  };
};

export const DeleteUser = (id) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: id,
  };
};
export const EditingUser=(data)=>{
  return{
    type:actionTypes.EDITING_USER,
    payload:data
  }
}

export const openModal = (id) => {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: id,
  };
};

export const openAddModal = (id) => {
  return {
    type: actionTypes.OPEN_ADD_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

export const closeAddModal = () => {
  return {
    type: actionTypes.CLOSE_ADD_MODAL,
  };
};
export const editableUser = (id) => {
  return {
    type: actionTypes.EDITABLE_USER,
    payload: id,
  };
};
export const getRoles = () => {
  return {
    type: actionTypes.GET_ROLES,
  };
};
export const getRolesSuccess = (data) => {
  return {
    type: actionTypes.GET_ROLES_SUCCESS,
    payload: data,
  };
};

export const editUser=(data)=>{
  return{
    type:actionTypes.EDIT_USER,
    payload:data
  }
}

