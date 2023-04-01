/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import { Badge, BadgesCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BadgeCreateForm extends XForm {
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

  onSubmit(document: Partial<Badge>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.badges.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.BADGES_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.BADGES_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.BADGES_EDIT, {
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
