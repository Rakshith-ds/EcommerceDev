import Navboard from "./Navboard";
import { Outlet, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "/Users/rakshithds/Desktop/ReactJS/frontend/src/Store/store.js";
import SideBar from "./Sidebar";
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
        <Navboard user={user} />
        <main style={{ display: "flex" }}>
          <SideBar />
          <div style={{ height: "100vh", overflow: "auto", width: "100%" }}>
            <Outlet />
          </div>
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
