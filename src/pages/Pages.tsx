import RouterType from "../types/router.types";
import Home from "./Home";

const Pages: RouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
];

export default Pages;
