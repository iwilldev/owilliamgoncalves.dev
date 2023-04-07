import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { BlogPage } from "~/features/BlogPage";
import { breadcrumbBlog } from "~/utils/breadcrumb";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import type { BlogPageProps } from "~/utils/types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Blog - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description: "Meus artigos publicados na Dev Community",
  "og:image": `https://owilliamgoncalves.dev/assets/meta/blog.jpg`,
  "og:title": "Blog",
  "og:description": "Meus artigos publicados na Dev Community",
  "og:url": "https://owilliamgoncalves.dev/blog",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page") || "1";
  const posts = await fetch(
    `https://dev.to/api/articles/latest?username=owilliamgoncalves&per_page=10&page=${page}`
  ).then((res) => res.json());
  return json<BlogPageProps>({
    posts,
  });
};

export default function Sobre() {
  const data = useLoaderData<BlogPageProps>();
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbBlog);
  }, []);
  return <BlogPage data={data} />;
}
