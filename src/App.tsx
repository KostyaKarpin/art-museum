// eslint-disable-next-line import/namespace
import { Route, Routes } from "react-router";
import { routes } from "@constants/routes";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => {
    return <Route key={key} path={path} element={component} />;
  });

  return <Routes>{routeComponents}</Routes>;
};

export default App;
