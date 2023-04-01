/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Book,
  BookChaptersCollection,
  BooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookEditForm extends XForm {
  @Inject(() => BooksCollection)
  collection: BooksCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        label: t("management.books.fields.title"),
        name: ["title"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "author",
        label: t("management.books.fields.author"),
        name: ["author"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "genres",
        label: t("management.books.fields.genres"),
        name: ["genres"],
        required: true,
        initialValue: [],
        component: Ant.Input,
        isList: true,
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Book> {
    return {
      _id: 1,
      title: 1,
      author: 1,
      genres: 1,
    };
  }

  onSubmit(_id, values: Partial<Book>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.books.edit_confirmation"),
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
