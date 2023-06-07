import Pages from "./Pages";
import RouterType from "../types/router.types";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";

const Router = () => {
  const list = Pages.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      {list}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
