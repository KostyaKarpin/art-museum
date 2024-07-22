// eslint-disable-next-line import/namespace
import { Route, Routes } from "react-router";
import { routes } from "@constants/routes";
import { Global } from "./globalStyles/Global";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => {
    return <Route key={key} path={path} element={component} />;
  });

  return (
    <>
      <Global />
      <Routes>{routeComponents}</Routes>
    </>
  );
};

export default App;
