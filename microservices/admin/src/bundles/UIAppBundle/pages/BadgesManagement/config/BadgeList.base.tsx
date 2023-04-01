/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { Badge, BadgesCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BadgeList extends XList<Badge> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        title: t("management.badges.fields.name"),
        key: "management.badges.fields.name",
        dataIndex: ["name"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "description",
        title: t("management.badges.fields.description"),
        key: "management.badges.fields.description",
        dataIndex: ["description"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "icon",
        title: t("management.badges.fields.icon"),
        key: "management.badges.fields.icon",
        dataIndex: ["icon"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "file",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      icon: "icon._id",
    };
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
}
