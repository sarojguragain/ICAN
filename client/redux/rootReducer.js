import { combineReducers } from 'redux';
// import menuList from './master/menuListReducer';
import loginReducer from './user/reducer';


const rootReducer = combineReducers({
    LoginList:loginReducer,
    

});

export default rootReducer;
