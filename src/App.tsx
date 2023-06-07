import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./pages/router";

// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";

// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag: HTMLElement | null = document.querySelector("html");

  if (skinMode) {
    HTMLTag?.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
