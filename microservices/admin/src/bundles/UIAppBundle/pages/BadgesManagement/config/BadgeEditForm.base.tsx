/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import { Badge, BadgesCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BadgeEditForm extends XForm {
  @Inject(() => BadgesCollection)
  collection: BadgesCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        label: t("management.badges.fields.name"),
        name: ["name"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "description",
        label: t("management.badges.fields.description"),
        name: ["description"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "iconId",
        label: t("management.badges.fields.icon"),
        name: ["iconId"],
        component: UIComponents.AdminFileUpload,
        componentProps: { field: "_id" },
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Badge> {
    return {
      _id: 1,
      name: 1,
      description: 1,
      icon: {
        _id: 1,
        downloadUrl: 1,
        name: 1,
      },
      iconId: 1,
    };
  }

  onSubmit(_id, values: Partial<Badge>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.badges.edit_confirmation"),
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
