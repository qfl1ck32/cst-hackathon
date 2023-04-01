import { BooksCollection } from "@bundles/UIAppBundle/collections";
import * as Ant from "antd";
import * as React from "react";
import * as debounce from "lodash.debounce";
import { use, useTranslate } from "@bluelibs/x-ui";
import { BookListFiltersForm } from "../../config/BookListFiltersForm";

type BooksListFiltersProps = {
  onUpdate: (filters: any) => void;
};

export const BooksListFilters = React.memo(BooksListFiltersBase);

export function BooksListFiltersBase(props: BooksListFiltersProps) {
  const [form] = Ant.Form.useForm();
  const t = useTranslate();

  const debouncedFilterUpdates = React.useMemo(() => {
    const setFilters = (_, filters) => {
      props.onUpdate(filters);
    };
    return debounce(setFilters, 500);
  }, [props.onUpdate]);

  const filterForm = use(BookListFiltersForm, { transient: true });
  filterForm.build();

  return (
    <Ant.Form
      form={form}
      labelCol={{ span: 24 }}
      onValuesChange={debouncedFilterUpdates}
    >
      <Ant.Row gutter={[16, 8]}>
        {filterForm.rest().map((item) => {
          return (
            <Ant.Col span={8} key={item.id}>
              {filterForm.render(item)}
            </Ant.Col>
          );
        })}
      </Ant.Row>
      <Ant.Form.Item>
        <Ant.Button
          htmlType="button"
          onClick={() => {
            form.resetFields();
            props.onUpdate({});
          }}
        >
          {t("generics.list_filters_reset")}
        </Ant.Button>
      </Ant.Form.Item>
    </Ant.Form>
  );
}
