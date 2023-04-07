import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router";
import { indexText } from "~/data/pages/index/text";
import { IndexPage } from "~/features/IndexPage";
import { useEffect } from "react";
import { breadcrumbIndex } from "~/utils/breadcrumb";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import type { IndexPageProps } from "~/utils/types";

export const loader: LoaderFunction = async () => {
  return json<IndexPageProps>({ indexImage: '/assets/images/index.png', indexText });
};

export default function Index() {
  const data = useLoaderData<IndexPageProps>();
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbIndex);
  }, []);
  return <IndexPage data={data} />;
}
