/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { EndUserBooksList } from "../components/List/EndUserBooksList";
import { EndUserBooksCreate } from "../components/Create/EndUserBooksCreate";
import { EndUserBooksEdit } from "../components/Edit/EndUserBooksEdit";
import { EndUserBooksView } from "../components/View/EndUserBooksView";

import { SettingFilled } from "@ant-design/icons";

export const END_USER_BOOKS_LIST: IRoute = {
  path: "/admin/end-user-books",
  component: EndUserBooksList,
  menu: {
    key: "END_USER_BOOKS_LIST",
    label: "management.end_user_books.menu.title",
    icon: SettingFilled,
  },
};

export const END_USER_BOOKS_CREATE: IRoute = {
  path: "/admin/end-user-books/create",
  component: EndUserBooksCreate,
};

export const END_USER_BOOKS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/end-user-books/:id/edit",
  component: EndUserBooksEdit,
};

export const END_USER_BOOKS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/end-user-books/:id/view",
  component: EndUserBooksView,
};
