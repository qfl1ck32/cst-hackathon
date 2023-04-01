/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { BookChaptersList } from "../components/List/BookChaptersList";
import { BookChaptersCreate } from "../components/Create/BookChaptersCreate";
import { BookChaptersEdit } from "../components/Edit/BookChaptersEdit";
import { BookChaptersView } from "../components/View/BookChaptersView";

import { SettingFilled } from "@ant-design/icons";

export const BOOK_CHAPTERS_LIST: IRoute = {
  path: "/admin/book-chapters",
  component: BookChaptersList,
  menu: {
    key: "BOOK_CHAPTERS_LIST",
    label: "management.book_chapters.menu.title",
    icon: SettingFilled,
  },
};

export const BOOK_CHAPTERS_CREATE: IRoute = {
  path: "/admin/book-chapters/create",
  component: BookChaptersCreate,
};

export const BOOK_CHAPTERS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/book-chapters/:id/edit",
  component: BookChaptersEdit,
};

export const BOOK_CHAPTERS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/book-chapters/:id/view",
  component: BookChaptersView,
};
