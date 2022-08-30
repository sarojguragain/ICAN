import { legacy_createStore as createStore,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleWare = createSagaMiddleware();
const store = composeWithDevTools(
    applyMiddleware(sagaMiddleWare)
)(createStore)(rootReducer);

sagaMiddleWare.run(rootSaga);

export default store;
