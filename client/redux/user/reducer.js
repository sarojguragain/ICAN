import { actionTypes } from "./type";

var initialState = {
    login: {
        LoginId:'',
        password:'',
        isSuperAdmin:true,
    },
    users:[],
    loginSuccess: false,
    changePassword:{LoginId:'Test'},
    profile:{
        userId: '',
        userName: '',
       
     },
    isSuccess:false,
    token:'',
    authentication:false,
    message:'',
    error:false,
    success:false
};

const loginReducer = (state = initialState, action) => {
    
   
    switch (action.type) {          
            
        case actionTypes.LOGIN:
            let obj = {};
            obj[action.payload.field] = action.payload.value;
            let login = Object.assign({}, state.login, obj);
            return { 
                ...state,
                login: login,
                message:'',
                error:false,
                success:false
            };
            case actionTypes.GET_USERS_SUCCESS:
                console.log("REDUCER", action.payload)
           return {
            ...state,
            users:action.payload
           }

        default:
            return state;
    }
};

export default loginReducer;