import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarkDownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import { useEffect } from "react";
import { PostPage } from "~/features/PostPage";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import { breadcrumbBlogPost } from "~/utils/breadcrumb";

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: `${data.title} - Blog - William Gonçalves`,
  viewport: "width=device-width,initial-scale=1",
  description: data.description,
  "og:image": data.cover_image || data.social_image,
  "og:title": data.title,
  "og:description": data.description,
  "og:url": `https://iwill.dev/blog${data.path}`,
  "og:site_name": "William Gonçalves",
  "og:type": "article",
});

const md = new MarkDownIt().use(highlightjs, {
  code: true,
});

export const loader: LoaderFunction = async ({ params }) => {
  const post = await fetch(
    `https://dev.to/api/articles/${params.user}/${params.post}`
  ).then((response) => response.json());
  return post;
};

export default function Post() {
  const data = useLoaderData();
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbBlogPost(data.title));
  }, []);
  data.body_html = md.render(data.body_markdown);
  return <PostPage data={data} />;
}
