/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  BookChapter,
  BooksCollection,
  BookChaptersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookChapterList extends XList<BookChapter> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        title: t("management.book_chapters.fields.title"),
        key: "management.book_chapters.fields.title",
        dataIndex: ["title"],
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
        id: "book",
        title: t("management.book_chapters.fields.book"),
        key: "management.book_chapters.fields.book",
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
    ]);
  }

  static getSortMap() {
    return {
      book: "book.title",
    };
  }

  static getRequestBody(): QueryBodyType<BookChapter> {
    return {
      _id: 1,
      title: 1,
      book: {
        _id: 1,
        title: 1,
      },
      bookId: 1,
    };
  }
}
