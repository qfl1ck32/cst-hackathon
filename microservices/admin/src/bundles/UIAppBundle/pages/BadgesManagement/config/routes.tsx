/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { BadgesList } from "../components/List/BadgesList";
import { BadgesCreate } from "../components/Create/BadgesCreate";
import { BadgesEdit } from "../components/Edit/BadgesEdit";
import { BadgesView } from "../components/View/BadgesView";

import { SettingFilled } from "@ant-design/icons";

export const BADGES_LIST: IRoute = {
  path: "/admin/badges",
  component: BadgesList,
  menu: {
    key: "BADGES_LIST",
    label: "management.badges.menu.title",
    icon: SettingFilled,
  },
};

export const BADGES_CREATE: IRoute = {
  path: "/admin/badges/create",
  component: BadgesCreate,
};

export const BADGES_EDIT: IRoute<{ id: string }> = {
  path: "/admin/badges/:id/edit",
  component: BadgesEdit,
};

export const BADGES_VIEW: IRoute<{ id: string }> = {
  path: "/admin/badges/:id/view",
  component: BadgesView,
};
