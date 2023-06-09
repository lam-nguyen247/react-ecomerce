import { Route, Routes, Navigate } from "react-router-dom";
// @ts-ignore
import Pages from "./Pages";
// @ts-ignore
import RouterType from "../types/router.types";
// @ts-ignore
import NotFound from "./NotFound";
// @ts-ignore
import Main from "../layouts/Main";
const Router = () => {
  const list = Pages.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/product" replace />} />
      <Route element={<Main />}>{list}</Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
