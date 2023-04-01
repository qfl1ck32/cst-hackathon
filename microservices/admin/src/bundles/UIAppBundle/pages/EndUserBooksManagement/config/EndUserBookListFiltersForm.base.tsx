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
        id: "tests",
        label: t("management.end_user_books.fields.tests"),
        name: ["tests"],
        columns: true,
        nest: [
          {
            id: "chapter",
            label: t("management.end_user_books.fields.tests.chapter"),
            name: ["tests", "chapter"],
            required: true,
            initialValue: [],
            component: Ant.Input,
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

          {
            id: "numberOfTries",
            label: t("management.end_user_books.fields.tests.numberOfTries"),
            name: ["tests", "numberOfTries"],
            required: true,
            initialValue: [],
            component: Ant.InputNumber,
          },

          {
            id: "testId",
            label: t("management.end_user_books.fields.tests.testId"),
            name: ["tests", "testId"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },
        ],
      },

      {
        id: "progress",
        label: t("management.end_user_books.fields.progress"),
        name: ["progress"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
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
