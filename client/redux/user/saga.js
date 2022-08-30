import { put, takeEvery, call } from 'redux-saga/effects';
import { httpGetUsers,httplogin,httpRegistration } from '../http/user';
import { GetUsersSuccess } from './action';
import { actionTypes } from './type';






function* getLogin(action) {
    console.log("SAGA LOGIN",action.payload);
    const token = localStorage.token;
    const headerParms = {
        Authorization: `bearer ${token}`
    };
    try {
        const user = yield call(httplogin,action.payload, headerParms);
        const data = user.data.responseData;
        yield put(LoginSuccess(data)  );

    } catch (e) {
        console.log('error', e.message);
    }
}

function* getUsers() {
    
    try {
        const user = yield call(httpGetUsers);
        const data = user.data.data;
        console.log("SAGA",user)
        yield put(GetUsersSuccess(data) );

    } catch (e) {
        console.log('error', e.message);
    }
}
function*userRegistration(action){
    const token = localStorage.token;
    const headerParms = {
        Authorization: `bearer ${token}`
    };
    try{
        const user =  yield call(httpRegistration,action.payload,headerParms);
        const data = user.data;
        console.log("RESPONSE DATA", data,user);
        yield put(registrationSuccess(data));
    }catch(err){
        console.log('error',err.message);
    }
}


function* loginSaga() {
    yield takeEvery(actionTypes.LOGIN, getLogin);
    yield takeEvery(actionTypes.GET_USERS,getUsers );
    yield takeEvery(actionTypes.REGISTRATION, userRegistration);
}

export default loginSaga;
