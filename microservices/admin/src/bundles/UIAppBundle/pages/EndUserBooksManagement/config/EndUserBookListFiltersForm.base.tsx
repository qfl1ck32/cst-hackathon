/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUserBook,
  BooksCollection,
  EndUsersCollection,
  EndUserBooksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "chaptersTests",
        label: t("management.end_user_books.fields.chaptersTests"),
        name: ["chaptersTests"],
        columns: true,
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
      },

      {
        id: "bookId",
        label: t("management.end_user_books.fields.book"),
        name: ["bookId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={BooksCollection}
              field="title"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "endUserId",
        label: t("management.end_user_books.fields.endUser"),
        name: ["endUserId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={EndUsersCollection}
              field="_id"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
