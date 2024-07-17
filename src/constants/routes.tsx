import AboutPage from "../pages/AboutPage";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/about/:id",
    component: <AboutPage />,
  },
  {
    path: "/favorites",
    component: <FavoritesPage />,
  },
];
