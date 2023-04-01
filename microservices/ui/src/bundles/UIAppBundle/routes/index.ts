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
  name: "Search",
  path: "/search",
};

export const Book: IRoute<{ id: string }> = {
  name: "Book",
  path: "/book/:id",
};
