import Navboard from "./Navboard";
import { Outlet, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "/Users/rakshithds/Desktop/ReactJS/frontend/src/Store/store.js";
import { useEffect } from "react";

const RootLayout = () => {
  const user = sessionStorage.getItem("name");
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user === "") {
      return navigate("/");
    }
  }, [user]);
  return (
    <div>
      <Provider store={store}>
        <main>
          <Navboard user={user} />
          <div>
            <Outlet />
          </div>
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
