/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  EndUserBook,
  BooksCollection,
  EndUsersCollection,
  EndUserBooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookEditForm extends XForm {
  @Inject(() => EndUserBooksCollection)
  collection: EndUserBooksCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "tests",
        label: t("management.end_user_books.fields.tests"),
        name: ["tests"],
        required: true,
        isList: true,
        nest: [
          {
            id: "chapter",
            label: t("management.end_user_books.fields.tests.chapter"),
            name: ["tests", "chapter"],
            required: true,
            initialValue: [],
            component: Ant.InputNumber,
          },

          {
            id: "numberOfTries",
            label: t("management.end_user_books.fields.tests.numberOfTries"),
            name: ["tests", "numberOfTries"],
            required: true,
            initialValue: [],
            component: Ant.InputNumber,
          },

          {
            id: "isPassed",
            label: t("management.end_user_books.fields.tests.isPassed"),
            name: ["tests", "isPassed"],
            required: true,
            initialValue: [],
            render: (props) => (
              <Ant.Form.Item {...props}>
                <Ant.Radio.Group>
                  <Ant.Radio value={false} key={0}>
                    No
                  </Ant.Radio>
                  <Ant.Radio value={true} key={1}>
                    Yes
                  </Ant.Radio>
                </Ant.Radio.Group>
              </Ant.Form.Item>
            ),
          },
        ],
        initialValue: [],
      },

      {
        id: "progress",
        label: t("management.end_user_books.fields.progress"),
        name: ["progress"],
        required: true,
        component: Ant.InputNumber,
      },

      {
        id: "bookId",
        label: t("management.end_user_books.fields.book"),
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

      {
        id: "endUserId",
        label: t("management.end_user_books.fields.endUser"),
        name: ["endUserId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={EndUsersCollection}
              field="_id"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<EndUserBook> {
    return {
      _id: 1,
      tests: {
        chapter: 1,
        numberOfTries: 1,
        isPassed: 1,
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

  onSubmit(_id, values: Partial<EndUserBook>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_user_books.edit_confirmation"),
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
