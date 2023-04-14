import { useState } from "react";
import './index.css'
import {
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import RouterRender from "./route";

import WujieReact from "wujie-react";

const { bus } = WujieReact;

function App() {
  const [state, setState] = useState({
    active: false,
  });

  function Nav() {
    // const navigation = useNavigate();
    // // 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
    // bus.$on("sub-route-change", (name: any, path: any) => {
    //   const mainName = `${name}-sub`;
    //   const mainPath = `/${name}-sub${path}`;
    //   const currentPath = window.location.hash.replace("#", "");
    //   if (currentPath.includes(mainName) && currentPath !== mainPath) {
    //     navigation(mainPath);
    //   }
    // });

    return (
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          介绍
        </NavLink>
        <NavLink
          to="/boxPage"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          myapp
        </NavLink>
        <NavLink
          to="/testPage"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          testPage
        </NavLink>
      </nav>
    );
  }

  return (
    <div className="app">

        <BrowserRouter>
          <div className={state.active ? "nav active" : "nav"}>
            <Nav />
          </div>
          <div className="content" onClick={() => setState({ active: false })}>
          <RouterRender />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
