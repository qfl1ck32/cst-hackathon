/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { BooksList } from "../components/List/BooksList";
import { BooksCreate } from "../components/Create/BooksCreate";
import { BooksEdit } from "../components/Edit/BooksEdit";
import { BooksView } from "../components/View/BooksView";

import { SettingFilled } from "@ant-design/icons";

export const BOOKS_LIST: IRoute = {
  path: "/admin/books",
  component: BooksList,
  menu: {
    key: "BOOKS_LIST",
    label: "management.books.menu.title",
    icon: SettingFilled,
  },
};

export const BOOKS_CREATE: IRoute = {
  path: "/admin/books/create",
  component: BooksCreate,
};

export const BOOKS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/books/:id/edit",
  component: BooksEdit,
};

export const BOOKS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/books/:id/view",
  component: BooksView,
};
