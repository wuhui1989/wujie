import { useRoutes } from "react-router-dom";
import {RouteObject} from "react-router"
import TestPage from "./pages/testPage";
import BoxPage from "./pages/boxPage";
import Home from "./pages/home";

const routeList:RouteObject[] = [
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/testPage',
        element: <TestPage />
    },
    {
        path:'/boxPage',
        element:<BoxPage />
    }
]
  


const RouterRender = ()=>{


    const RouterRender = useRoutes(routeList);
    return  RouterRender
}

export default RouterRender;