/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  EndUser,
  UsersCollection,
  EndUserBooksCollection,
  BadgesCollection,
  EndUsersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserEditForm extends XForm {
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

  static getRequestBody(): QueryBodyType<EndUser> {
    return {
      _id: 1,
      level: 1,
      experience: 1,
      gold: 1,
      owner: {
        _id: 1,
        fullName: 1,
      },
      ownerId: 1,
      badges: {
        _id: 1,
        name: 1,
      },
      badgesIds: 1,
    };
  }

  onSubmit(_id, values: Partial<EndUser>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_users.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
