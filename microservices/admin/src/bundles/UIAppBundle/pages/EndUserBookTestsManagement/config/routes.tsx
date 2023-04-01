/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { EndUserBookTestsList } from "../components/List/EndUserBookTestsList";
import { EndUserBookTestsCreate } from "../components/Create/EndUserBookTestsCreate";
import { EndUserBookTestsEdit } from "../components/Edit/EndUserBookTestsEdit";
import { EndUserBookTestsView } from "../components/View/EndUserBookTestsView";

import { SettingFilled } from "@ant-design/icons";

export const END_USER_BOOK_TESTS_LIST: IRoute = {
  path: "/admin/end-user-book-tests",
  component: EndUserBookTestsList,
  menu: {
    key: "END_USER_BOOK_TESTS_LIST",
    label: "management.end_user_book_tests.menu.title",
    icon: SettingFilled,
  },
};

export const END_USER_BOOK_TESTS_CREATE: IRoute = {
  path: "/admin/end-user-book-tests/create",
  component: EndUserBookTestsCreate,
};

export const END_USER_BOOK_TESTS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/end-user-book-tests/:id/edit",
  component: EndUserBookTestsEdit,
};

export const END_USER_BOOK_TESTS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/end-user-book-tests/:id/view",
  component: EndUserBookTestsView,
};
