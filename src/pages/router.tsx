// @ts-nocheck
import Pages from "./Pages";
import RouterType from "../types/router.types";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import Main from "../layouts/Main";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
const Router = () => {
  const list = Pages.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route element={<Main />}>{list}</Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
