import { IRoute } from "@bluelibs/x-ui-router";

export const Home: IRoute = {
  name: "Home",
  path: "/home",
};

export const Landing: IRoute = {
  name: "Landing",
  path: "/",
};

export const Login: IRoute = {
  name: "Login",
  path: "/login",
};

export const Register: IRoute = {
  name: "Register",
  path: "/register",
};

export const Search: IRoute = {
  name: "Search",
  path: "/search",
};

export const Library: IRoute = {
  name: "Library",
  path: "/library",
};

export const Book: IRoute<{ endUserBookId: string }> = {
  name: "Book",
  path: "/library/:endUserBookId",
};

export const Test: IRoute<{ endUserBookId: string; chapterId: string }> = {
  name: "Test",
  path: "/library/:endUserBookId/test/:chapterId",
};

export const Profile: IRoute = {
  name: "Profile",
  path: "/profile",
};
