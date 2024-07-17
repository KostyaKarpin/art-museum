import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// eslint-disable-next-line import/namespace
import { HashRouter } from "react-router-dom";

const rootElement = document.querySelector("#root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>
);
