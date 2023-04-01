/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Book,
  BookChaptersCollection,
  BooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookCreateForm extends XForm {
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

  onSubmit(document: Partial<Book>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.books.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.BOOKS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.BOOKS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.BOOKS_EDIT, {
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
