import React, { Children } from "react";
import { Navigate } from "react-router-dom";
const Home  = React.lazy(() => import("@pages/Home"));
const Town = React.lazy(() => import("@/pages/Town"));
const Gov = React.lazy(() => import("@pages/Gov/Gov"));
const Dev = React.lazy(() => import("@pages/Dev/Dev"));
const Product = React.lazy(() => import("@pages/Product/Product"));
const Game = React.lazy(() => import("@pages/Game/Game"));
const Design = React.lazy(() => import("@pages/Design/Design"));
const Operate = React.lazy(() => import("@pages/Operate/Operate"));
const NotFoundPage = React.lazy(() => import("@pages/NotFound"));
const Info = React.lazy(() => import("@pages/Info"));
const Ginshin = React.lazy(() => import("@pages/GinshenImpart"))
const CheckHome = React.lazy(()=> import("@components/CheckHome"))
const route = [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "town",
        element: <Town />,
      },
      {
        path: "gov",
        element: <Gov />,
      },
      {
        path: "code",
        element: <Dev />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "operate",
        element: <Operate />,
      },
      
    ],
  },
  {
    path: "/ginshen-impart",
    element: <Ginshin/>,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "",
    element: <CheckHome/>,
  },
    //404页面
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default route;
