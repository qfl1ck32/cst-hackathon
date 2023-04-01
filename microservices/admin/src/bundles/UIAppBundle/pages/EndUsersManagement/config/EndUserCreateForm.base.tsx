/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  EndUser,
  UsersCollection,
  EndUserBooksCollection,
  BadgesCollection,
  EndUsersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserCreateForm extends XForm {
  @Inject(() => EndUsersCollection)
  collection: EndUsersCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "level",
        label: t("management.end_users.fields.level"),
        name: ["level"],
        required: true,
        component: Ant.InputNumber,
      },

      {
        id: "experience",
        label: t("management.end_users.fields.experience"),
        name: ["experience"],
        required: true,
        component: Ant.InputNumber,
      },

      {
        id: "gold",
        label: t("management.end_users.fields.gold"),
        name: ["gold"],
        required: true,
        component: Ant.InputNumber,
      },

      {
        id: "ownerId",
        label: t("management.end_users.fields.owner"),
        name: ["ownerId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "badgesIds",
        label: t("management.end_users.fields.badges"),
        name: ["badgesIds"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={BadgesCollection}
              field="name"
              required={true}
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<EndUser>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_users.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.END_USERS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.END_USERS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.END_USERS_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
