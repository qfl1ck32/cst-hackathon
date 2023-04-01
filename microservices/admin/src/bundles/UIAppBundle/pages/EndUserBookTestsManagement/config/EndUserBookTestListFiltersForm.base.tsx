/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUserBookTest,
  EndUserBookTestsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookTestListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "questions",
        label: t("management.end_user_book_tests.fields.questions"),
        name: ["questions"],
        columns: true,
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
      },
    ]);
  }
}
