/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUser,
  UsersCollection,
  EndUserBooksCollection,
  BadgesCollection,
  EndUsersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "level",
        label: t("management.end_users.fields.level"),
        name: ["level"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "experience",
        label: t("management.end_users.fields.experience"),
        name: ["experience"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "gold",
        label: t("management.end_users.fields.gold"),
        name: ["gold"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "ownerId",
        label: t("management.end_users.fields.owner"),
        name: ["ownerId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="username"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "badgesIds",
        label: t("management.end_users.fields.badges"),
        name: ["badgesIds"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={BadgesCollection}
              field="name"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
