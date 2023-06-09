/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUser,
  UsersCollection,
  EndUserBooksCollection,
  BadgesCollection,
  EndUsersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserList extends XList<EndUser> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "level",
        title: t("management.end_users.fields.level"),
        key: "management.end_users.fields.level",
        dataIndex: ["level"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "experience",
        title: t("management.end_users.fields.experience"),
        key: "management.end_users.fields.experience",
        dataIndex: ["experience"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "gold",
        title: t("management.end_users.fields.gold"),
        key: "management.end_users.fields.gold",
        dataIndex: ["gold"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "owner",
        title: t("management.end_users.fields.owner"),
        key: "management.end_users.fields.owner",
        dataIndex: ["owner"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.end_users.fields.books"),
        key: "management.end_users.fields.books",
        dataIndex: ["books"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.end_users.fields.badges"),
        key: "management.end_users.fields.badges",
        dataIndex: ["badges"],
        sorter: true,
        render: (value, model) => {
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

  static getSortMap() {
    return {
      owner: "owner.username",
      books: "books._id",
      badges: "badges.name",
    };
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
