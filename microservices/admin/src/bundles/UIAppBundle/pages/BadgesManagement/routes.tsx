import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  BADGES_LIST as BASE_BADGES_LIST,
  BADGES_CREATE as BASE_BADGES_CREATE,
  BADGES_EDIT as BASE_BADGES_EDIT,
  BADGES_VIEW as BASE_BADGES_VIEW,
} from "./config/routes";

export const BADGES_LIST: IRoute = {
  ...BASE_BADGES_LIST,
};

export const BADGES_CREATE: IRoute = {
  ...BASE_BADGES_CREATE,
};

export const BADGES_EDIT: IRoute = {
  ...BASE_BADGES_EDIT,
};

export const BADGES_VIEW: IRoute = {
  ...BASE_BADGES_VIEW,
};
