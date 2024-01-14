import Navboard from "./Navboard";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "/Users/rakshithds/Desktop/ReactJS/Frontend/src/Store/store";
import SideBar from "./Sidebar";

const RootLayout = () => {
  // const user = useSelector((state) => state.auth.name);
  const user = sessionStorage.getItem("name");

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
