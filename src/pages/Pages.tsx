import RouterType from "../types/router.types";
// @ts-ignore
import Home from "./Home";

const Pages: RouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
];

export default Pages;
