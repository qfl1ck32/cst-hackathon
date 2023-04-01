/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Book,
  BookChaptersCollection,
  BooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookList extends XList<Book> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        title: t("management.books.fields.title"),
        key: "management.books.fields.title",
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
        id: "author",
        title: t("management.books.fields.author"),
        key: "management.books.fields.author",
        dataIndex: ["author"],
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
        id: "genres",
        title: t("management.books.fields.genres"),
        key: "management.books.fields.genres",
        dataIndex: ["genres"],
        sorter: true,
        render: (value, model) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "string",
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
        id: "chapters",
        title: t("management.books.fields.chapters"),
        key: "management.books.fields.chapters",
        dataIndex: ["chapters"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.BOOK_CHAPTERS_VIEW, {
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
      chapters: "chapters.title",
    };
  }

  static getRequestBody(): QueryBodyType<Book> {
    return {
      _id: 1,
      title: 1,
      author: 1,
      genres: 1,
      chapters: {
        _id: 1,
        title: 1,
      },
    };
  }
}
