import React from "react";

const ProductManagement = React.lazy(() => import("./dashboards/Product"));

const PostList = React.lazy(() => import("./posts/List"));

const PostUpsert = React.lazy(() => import("./posts/Upsert"));

const Pages = [
  {
    path: "/dashboard/product",
    element: <ProductManagement />,
    title: "Home",
  },
  {
    path: "/posts",
    element: <PostList />,
    title: "Posts",
  },
  {
    path: "/posts/add",
    element: <PostUpsert />,
    title: "Add Post",
  },
];

export default Pages;
