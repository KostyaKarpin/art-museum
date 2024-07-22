// eslint-disable-next-line import/namespace
import { Route, Routes } from "react-router";
import { routes } from "@constants/routes";
import { Global } from "./globalStyles/Global";
import Layout from "./components/layout/Layout";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => {
    return <Route key={key} path={path} element={component} />;
  });

  return (
    <>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeComponents}
        </Route>
      </Routes>
    </>
  );
};

export default App;
