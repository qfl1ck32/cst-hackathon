/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  EndUserBookTest,
  EndUserBookTestsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookTestList extends XList<EndUserBookTest> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "questions",
        title: t("management.end_user_book_tests.fields.questions"),
        key: "management.end_user_book_tests.fields.questions",
        dataIndex: ["questions"],
        sorter: true,
        render: (value, model) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "object",
                    value,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
    ]);
  }

  static getSortMap() {
    return {};
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
}
