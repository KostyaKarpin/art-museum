// eslint-disable-next-line import/no-unresolved
import AboutPage from "src/pages/AboutPage";
// eslint-disable-next-line import/no-unresolved
import FavoritesPage from "src/pages/FavoritesPage";
// eslint-disable-next-line import/no-unresolved
import HomePage from "src/pages/HomePage";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about/:id",
    component: AboutPage,
  },
  {
    path: "/favorites",
    component: FavoritesPage,
  },
];
