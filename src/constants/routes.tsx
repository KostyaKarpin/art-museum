import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import FavoritesPage from "@pages/FavoritesPage";

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
