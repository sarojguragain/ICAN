import { combineReducers } from 'redux';
import authenticationReducer from './auth/reducer';
import PageReducer from './pages/reducer';
import userReducer from './user/reducer';


const rootReducer = combineReducers({
    AuthList:authenticationReducer,
    UserList:userReducer,
    PageList:PageReducer,
});

export default rootReducer;
