/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  BookChapter,
  BooksCollection,
  BookChaptersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookChapterCreateForm extends XForm {
  @Inject(() => BookChaptersCollection)
  collection: BookChaptersCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        label: t("management.book_chapters.fields.title"),
        name: ["title"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "bookId",
        label: t("management.book_chapters.fields.book"),
        name: ["bookId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={BooksCollection}
              field="title"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<BookChapter>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.book_chapters.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.BOOK_CHAPTERS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.BOOK_CHAPTERS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.BOOK_CHAPTERS_EDIT, {
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
