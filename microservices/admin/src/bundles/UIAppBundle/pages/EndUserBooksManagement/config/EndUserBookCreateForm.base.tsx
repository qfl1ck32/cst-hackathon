/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  EndUserBook,
  BooksCollection,
  EndUsersCollection,
  EndUserBooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookCreateForm extends XForm {
  @Inject(() => EndUserBooksCollection)
  collection: EndUserBooksCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "chaptersTests",
        label: t("management.end_user_books.fields.chaptersTests"),
        name: ["chaptersTests"],
        required: true,
        isList: true,
        nest: [
          {
            id: "chapterId",
            label: t(
              "management.end_user_books.fields.chaptersTests.chapterId"
            ),
            name: ["chaptersTests", "chapterId"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },

          {
            id: "isPassed",
            label: t("management.end_user_books.fields.chaptersTests.isPassed"),
            name: ["chaptersTests", "isPassed"],
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

          {
            id: "score",
            label: t("management.end_user_books.fields.chaptersTests.score"),
            name: ["chaptersTests", "score"],
            required: true,
            initialValue: [],
            component: Ant.InputNumber,
          },

          {
            id: "numberOfTries",
            label: t(
              "management.end_user_books.fields.chaptersTests.numberOfTries"
            ),
            name: ["chaptersTests", "numberOfTries"],
            required: true,
            initialValue: [],
            component: Ant.InputNumber,
          },

          {
            id: "testId",
            label: t("management.end_user_books.fields.chaptersTests.testId"),
            name: ["chaptersTests", "testId"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },
        ],
        initialValue: [],
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

  onSubmit(document: Partial<EndUserBook>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_user_books.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.END_USER_BOOKS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.END_USER_BOOKS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.END_USER_BOOKS_EDIT, {
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
