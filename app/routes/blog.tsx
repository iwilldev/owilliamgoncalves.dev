import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ogImage from "~/assets/meta/blog.jpg";
import { BlogPage } from "~/features/BlogPage";
import { breadcrumbBlog } from "~/utils/breadcrumb";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import type { BlogPageProps } from "~/utils/types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Blog - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description: "Meus artigos publicados na Dev Community",
  "og:image": ogImage,
  "og:title": "Blog",
  "og:description": "Meus artigos publicados na Dev Community",
  "og:url": "https://owilliamgoncalves.dev/blog",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async () => {
  const posts = await fetch(
    "https://dev.to/api/articles/?username=owilliamgoncalves"
  );
  return json<BlogPageProps>({
    posts: await posts.json(),
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
