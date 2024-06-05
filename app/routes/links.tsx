import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { links } from "~/data/pages/links/links";
import { breadcrumbLinks } from "~/utils/breadcrumb";
import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import type { LinksPageProps } from "~/utils/types";
import { LinksPage } from "~/features/LinksPage";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Links - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description: "Me liga, me manda um telegramaaaa...",
  "og:image": `https://iwill.dev/assets/meta/index.jpg`,
  "og:title": "Links",
  "og:description": "Me liga, me manda um telegramaaaa...",
  "og:url": "https://iwill.dev/skills",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async () => {
  return {
    indexImage: "/assets/images/index.png",
    links,
  };
};

export default function Links() {
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbLinks);
  }, []);
  const data = useLoaderData<LinksPageProps>();
  return <LinksPage data={data} />;
}
