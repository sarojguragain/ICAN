import { useEffect, useState } from 'react';

import store from "../redux/store";
import "../styles/globals.css";
import '../styles/style.css';
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import Login from './authentication/login'
import NavLayout from '../components/navigation/layout';
import { setAuthorizationToken, setCurrentUser } from '../redux/auth/action';


function MyApp({ Component, pageProps }) {
  const [tokens, setTokens] = useState('');
  useEffect(()=>{
    const token= localStorage.Token?localStorage.Token:'';
    const AuthUser = localStorage.User?JSON.parse(localStorage.User):{};
    if(tokens !== token && !!token){
      setTokens(token);
      setAuthorizationToken(token);
      store.dispatch(setCurrentUser(AuthUser));
    }
  })

  return (
    <>
      <Provider store={store}>
        {!!tokens && store.getState().AuthList.isAuthenticate? (
        
          <NavLayout>
            <Component {...pageProps} />
          </NavLayout>
        ) : (
          <Login />
        )}
      </Provider>
    </>
  );
}

export default MyApp;
