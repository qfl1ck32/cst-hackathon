/** @overridable */
import { EndUserBook } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class EndUserBookViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.end_user_books.fields._id"),
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
        id: "tests",
        label: t("management.end_user_books.fields.tests"),
        dataIndex: ["tests"],
        render: (value) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "object",
                    value,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
      {
        id: "progress",
        label: t("management.end_user_books.fields.progress"),
        dataIndex: ["progress"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "book",
        label: t("management.end_user_books.fields.book"),
        dataIndex: ["book"],
        render: (value) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.BOOKS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "title",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "endUser",
        label: t("management.end_user_books.fields.endUser"),
        dataIndex: ["endUser"],
        render: (value) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.END_USERS_VIEW, {
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
    ]);
  }

  static getRequestBody(): QueryBodyType<EndUserBook> {
    return {
      _id: 1,
      tests: {
        chapter: 1,
        isPassed: 1,
        numberOfTries: 1,
        testId: 1,
      },
      progress: 1,
      book: {
        _id: 1,
        title: 1,
      },
      bookId: 1,
      endUser: {
        _id: 1,
      },
      endUserId: 1,
    };
  }
}
