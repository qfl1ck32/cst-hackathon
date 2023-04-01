/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  EndUserBookTest,
  EndUserBookTestsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookTestCreateForm extends XForm {
  @Inject(() => EndUserBookTestsCollection)
  collection: EndUserBookTestsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "questions",
        label: t("management.end_user_book_tests.fields.questions"),
        name: ["questions"],
        required: true,
        isList: true,
        nest: [
          {
            id: "text",
            label: t("management.end_user_book_tests.fields.questions.text"),
            name: ["questions", "text"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },

          {
            id: "type",
            label: t("management.end_user_book_tests.fields.questions.type"),
            name: ["questions", "type"],
            required: true,
            initialValue: [],
            render: (props) => {
              const options = [
                { value: "MULTIPLE_CHOICE", label: "Multiple Choice" },
                { value: "BOOLEAN", label: "Boolean" },
                { value: "TEXT", label: "Text" },
              ];
              return (
                <Ant.Form.Item {...props}>
                  <Ant.Select
                    placeholder={t(
                      "management.end_user_book_tests.fields.questions.type"
                    )}
                  >
                    {options.map((option) => (
                      <Ant.Select.Option
                        value={option.value}
                        key={option.value}
                      >
                        {t(
                          `management.end_user_book_tests.fields.questions.type_enums.${option.label.toLowerCase()}`
                        ) ?? option.label}
                      </Ant.Select.Option>
                    ))}
                  </Ant.Select>
                </Ant.Form.Item>
              );
            },
          },

          {
            id: "choices",
            label: t("management.end_user_book_tests.fields.questions.choices"),
            name: ["questions", "choices"],
            initialValue: [],
            component: Ant.Input,
            isList: true,
          },
        ],
        initialValue: [],
      },
    ]);
  }

  onSubmit(document: Partial<EndUserBookTest>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_user_book_tests.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.END_USER_BOOK_TESTS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.END_USER_BOOK_TESTS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.END_USER_BOOK_TESTS_EDIT, {
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
