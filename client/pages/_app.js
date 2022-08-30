import store from "../redux/store";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { useState } from "react";
import Login from "./user/login";
import NavLayout from "../components/navigation/navlayout";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(true);
  return (
    <>
      <Provider store={store}>
        {/* {!!token && store.getState().loginList.authentication ? ( */}
        {!!token ? (
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
