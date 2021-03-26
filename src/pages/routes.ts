import { paths } from "pages/paths";
import { HomePage } from "pages/home";
import { AuthPage } from "pages/auth";

export const routes = [
  {
    path: paths.home,
    exact: true,
    component: HomePage
  },
  {
    path: paths.auth,
    exact: true,
    component: AuthPage
  }
];
