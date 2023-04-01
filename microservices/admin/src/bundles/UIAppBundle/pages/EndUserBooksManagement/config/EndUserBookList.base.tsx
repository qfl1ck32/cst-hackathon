/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUserBook,
  BooksCollection,
  EndUsersCollection,
  EndUserBooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookList extends XList<EndUserBook> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "tests",
        title: t("management.end_user_books.fields.tests"),
        key: "management.end_user_books.fields.tests",
        dataIndex: ["tests"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.end_user_books.fields.progress"),
        key: "management.end_user_books.fields.progress",
        dataIndex: ["progress"],
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
        id: "book",
        title: t("management.end_user_books.fields.book"),
        key: "management.end_user_books.fields.book",
        dataIndex: ["book"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.end_user_books.fields.endUser"),
        key: "management.end_user_books.fields.endUser",
        dataIndex: ["endUser"],
        sorter: true,
        render: (value, model) => {
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

  static getSortMap() {
    return {
      book: "book.title",
      endUser: "endUser._id",
    };
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
