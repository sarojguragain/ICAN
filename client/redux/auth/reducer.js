import { actionTypes } from "./type";

const initialState = {
  login: {
    userName: "",
    password: "",
    isRemenber: false,
  },
  profile: {},
  isAuthenticate: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
  isExpire: true,
};

const authenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS: {
      if (payload.success && payload.data && payload.data.token !== null) {
        localStorage.setItem("Token", payload.data.token);
        localStorage.setItem("Email", payload.data.email);
        localStorage.setItem("User", JSON.stringify(payload.data));
        return {
          ...state,
          profile: {
            email: payload.data.email,
            name: payload.data.name,
            role: payload.data.role,
          },
          isAuthenticate: true,
          isSuccess: true,
          successMessage: payload.message,
          errorMessage: "",
          isExpire: false,
        };
      } else {
        return {
          ...state,
          profile: {},
          errorMessage: payload.message,
          isExpire: true,
          isSuccess: false,
          isAuthenticate: false,
          successMessage: "",
        };
      }
    }
    case actionTypes.TOKEN:
      if (payload) {
        return {
          ...state,
          profile: {
            email: payload.email,
            name: payload.name,
            role: payload.role,
          },
          isAuthenticate: true,
        };
      } else {
        return {
          ...state,
          isAuthenticate: false,
        };
      }

    case actionTypes.LOGOUT:
      return {
        profile: {},
        isAuthenticate: false,
        isSuccess: false,
        errorMessage: "",
        isExpire: true,
        successMessage: "You are Logout !",
      };

    default:
      return state;
  }
};
export default authenticationReducer;
