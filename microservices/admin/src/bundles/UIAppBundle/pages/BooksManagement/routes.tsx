import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  BOOKS_LIST as BASE_BOOKS_LIST,
  BOOKS_CREATE as BASE_BOOKS_CREATE,
  BOOKS_EDIT as BASE_BOOKS_EDIT,
  BOOKS_VIEW as BASE_BOOKS_VIEW,
} from "./config/routes";

export const BOOKS_LIST: IRoute = {
  ...BASE_BOOKS_LIST,
};

export const BOOKS_CREATE: IRoute = {
  ...BASE_BOOKS_CREATE,
};

export const BOOKS_EDIT: IRoute = {
  ...BASE_BOOKS_EDIT,
};

export const BOOKS_VIEW: IRoute = {
  ...BASE_BOOKS_VIEW,
};
