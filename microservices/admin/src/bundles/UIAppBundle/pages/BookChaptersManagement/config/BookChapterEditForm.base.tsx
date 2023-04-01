/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  BookChapter,
  BooksCollection,
  BookChaptersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookChapterEditForm extends XForm {
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

  onSubmit(_id, values: Partial<BookChapter>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.book_chapters.edit_confirmation"),
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
