import { actionTypes } from "./type";

var initialState = {
  users: [],
  user:{},
  isSuccess: false,
  Roles:[],
  message: "",
  error: false,
  success: false,
  isOpen: false,
  isAddUser:false,
  EditableId: null,
};

const userReducer = (state = initialState, action) => {
  let object={};
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

      case actionTypes.GET_ROLES_SUCCESS:
      return{
        ...state,
        Roles:action.payload
      }
      case actionTypes.GET_USER_BY_ID_SUCCESS:
        return {
          ...state,
          user:action.payload
        }

        case actionTypes.EDITABLE_USER:
          return{
            ...state,
            EditableUser:state.users.find(x=>x.id===action.payload),
            user:state.users.find(x=>x.id===action.payload)
          }
        case actionTypes.EDIT_USER:
          object[action.payload.field]= action.payload.value;
          return{
            ...state,
            user:{
              ...state.user,
              ...object
            }
          };
          
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        EditableId: action.payload,
      };

      case actionTypes.OPEN_ADD_MODAL:
        return {
          ...state,
          isAddUser: true,
          
        };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        EditableId: null,
        user:{},
        EditableUser:{}
      };

      case actionTypes.CLOSE_ADD_MODAL:
        return{
          ...state,
          isAddUser: false,

        }
    default:
      return state;
  }
};

export default userReducer;
