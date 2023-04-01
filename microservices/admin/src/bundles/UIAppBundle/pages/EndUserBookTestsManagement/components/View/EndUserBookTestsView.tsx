import { Link } from "react-router-dom";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import {
  useUIComponents,
  useRouter,
  useDataOne,
  use,
  XRouter,
  useTranslate,
} from "@bluelibs/x-ui";
import { ObjectId } from "@bluelibs/ejson";
import {
  EndUserBookTest,
  EndUserBookTestsCollection,
} from "@bundles/UIAppBundle/collections";
import { EndUserBookTestViewer } from "../../config/EndUserBookTestViewer";
import { features } from "../../config/features";

export function EndUserBookTestsView(props: { id: string }) {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const collection = use(EndUserBookTestsCollection);

  // If you want to benefit of live data features use useLiveData()
  const {
    data: document,
    isLoading,
    error,
  } = useDataOne(
    EndUserBookTestsCollection,
    new ObjectId(props.id),
    EndUserBookTestViewer.getRequestBody()
  );

  let content;
  if (isLoading) {
    content = (
      <Ant.Space align="center">
        <Ant.Spin size="large" />
      </Ant.Space>
    );
  } else {
    if (error || document === null) {
      content = (
        <Ant.Alert
          message={error || t("generics.error_message")}
          type="error"
        />
      );
    } else {
      content = <EndUserBookTestsViewComponent document={document} />;
    }
  }

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.end_user_book_tests.view.header")}
        onBack={() => window.history.back()}
        extra={getHeaderActions(collection, router, props.id)}
      />
      <Ant.Card>{content}</Ant.Card>
    </UIComponents.AdminLayout>
  );
}

export function EndUserBookTestsViewComponent(props: {
  document: Partial<EndUserBookTest>;
}) {
  const document = props.document;

  const viewer = use(EndUserBookTestViewer, { transient: true });
  viewer.setDocument(document);
  viewer.build();

  return (
    <Ant.Descriptions>
      {viewer.rest().map((item) => {
        return (
          <Ant.Descriptions.Item label={item.label} key={item.id}>
            {viewer.render(item)}
          </Ant.Descriptions.Item>
        );
      })}
    </Ant.Descriptions>
  );
}

export function getHeaderActions(
  collection: EndUserBookTestsCollection,
  router: XRouter,
  id: string
) {
  const actions = [];
  const t = useTranslate();

  if (features.edit) {
    actions.push(
      <Link
        key="edit"
        to={router.path(Routes.END_USER_BOOK_TESTS_EDIT, {
          params: { id },
        })}
      >
        <Ant.Button>{t("generics.edit")}</Ant.Button>
      </Link>
    );
  }
  if (features.delete) {
    actions.push(
      <Ant.Popconfirm
        key="delete"
        title="Are you sure you want to delete this EndUserBookTest?"
        onConfirm={() => {
          collection.deleteOne(id).then(() => {
            router.go(Routes.END_USER_BOOK_TESTS_LIST);
            Ant.notification.success({
              message: "Success",
              description: "You have deleted the EndUserBookTest",
            });
          });
        }}
      >
        <Ant.Button danger>{t("generics.delete")}</Ant.Button>
      </Ant.Popconfirm>
    );
  }

  const viewRoutePath = router.path(Routes.END_USER_BOOK_TESTS_VIEW, {
    params: { id },
  });

  return actions;
}
