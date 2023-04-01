/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  EndUserBookTest,
  EndUserBookTestsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookTestEditForm extends XForm {
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
        ],
        initialValue: [],
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<EndUserBookTest> {
    return {
      _id: 1,
      questions: {
        text: 1,
        type: 1,
      },
    };
  }

  onSubmit(_id, values: Partial<EndUserBookTest>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.end_user_book_tests.edit_confirmation"),
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
