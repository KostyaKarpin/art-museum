// eslint-disable-next-line import/namespace
import { Route, Routes } from "react-router";
import { routes } from "@constants/routes";
import { Global } from "./globalStyles/Global";
import Layout from "./components/layout/Layout";
// eslint-disable-next-line import/namespace
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/themes";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => {
    return <Route key={key} path={path} element={component} />;
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Routes>
          <Route path="/" element={<Layout />}>
            {routeComponents}
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
