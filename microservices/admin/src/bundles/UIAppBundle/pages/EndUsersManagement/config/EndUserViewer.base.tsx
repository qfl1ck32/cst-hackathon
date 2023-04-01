/** @overridable */
import { EndUser } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class EndUserViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.end_users.fields._id"),
        dataIndex: ["_id"],
        render: (value) => {
          const props = {
            type: "objectId",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "level",
        label: t("management.end_users.fields.level"),
        dataIndex: ["level"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "experience",
        label: t("management.end_users.fields.experience"),
        dataIndex: ["experience"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "gold",
        label: t("management.end_users.fields.gold"),
        dataIndex: ["gold"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "owner",
        label: t("management.end_users.fields.owner"),
        dataIndex: ["owner"],
        render: (value) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "username",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "books",
        label: t("management.end_users.fields.books"),
        dataIndex: ["books"],
        render: (value) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.END_USER_BOOKS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "_id",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "badges",
        label: t("management.end_users.fields.badges"),
        dataIndex: ["badges"],
        render: (value) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "relation",
                    value,
                    relation: {
                      path: router.path(Routes.BADGES_VIEW, {
                        params: {
                          id: value?._id,
                        },
                      }),
                      dataIndex: "name",
                    },
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<EndUser> {
    return {
      _id: 1,
      level: 1,
      experience: 1,
      gold: 1,
      owner: {
        _id: 1,
        username: 1,
      },
      ownerId: 1,
      books: {
        _id: 1,
      },
      badges: {
        _id: 1,
        name: 1,
      },
      badgesIds: 1,
    };
  }
}
