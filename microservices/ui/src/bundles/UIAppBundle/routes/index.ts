import { IRoute } from "@bluelibs/x-ui-router";

export const Home: IRoute = {
  name: "Home",
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

export const SearchBook: IRoute = {
  name: "Search Book",
  path: "/search-book",
};

export const Library: IRoute = {
  name: "Library",
  path: "/library",
};

export const Book: IRoute<{ endUserBookId: string }> = {
  name: "Book",
  path: "/library/:endUserBookId",
};

export const Test: IRoute<{ endUserBookId: string; chapter: string }> = {
  name: "Test",
  path: "/library/:endUserBookId/test/:chapter",
};
