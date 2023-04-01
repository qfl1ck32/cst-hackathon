import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  END_USER_BOOKS_LIST as BASE_END_USER_BOOKS_LIST,
  END_USER_BOOKS_CREATE as BASE_END_USER_BOOKS_CREATE,
  END_USER_BOOKS_EDIT as BASE_END_USER_BOOKS_EDIT,
  END_USER_BOOKS_VIEW as BASE_END_USER_BOOKS_VIEW,
} from "./config/routes";

export const END_USER_BOOKS_LIST: IRoute = {
  ...BASE_END_USER_BOOKS_LIST,
};

export const END_USER_BOOKS_CREATE: IRoute = {
  ...BASE_END_USER_BOOKS_CREATE,
};

export const END_USER_BOOKS_EDIT: IRoute = {
  ...BASE_END_USER_BOOKS_EDIT,
};

export const END_USER_BOOKS_VIEW: IRoute = {
  ...BASE_END_USER_BOOKS_VIEW,
};
