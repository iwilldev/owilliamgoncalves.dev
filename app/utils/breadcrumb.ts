export const breadcrumbIndex = [
  { label: "owilliamgoncalves.dev", href: "/" },
];

export const breadcrumbBlog = [
  ...breadcrumbIndex,
  { label: "blog", href: "/blog" },
];

export const breadcrumbBlogPost = (title: string) => [
  ...breadcrumbBlog,
  { label: title, href: "#" },
];

export const breadcrumbSobre = [
  ...breadcrumbIndex,
  { label: "sobre", href: "/sobre" },
];

export const breadcrumbSkills = [
  ...breadcrumbIndex,
  { label: "skills", href: "/skills" },
];

export const breadcrumbCurriculo = [
  ...breadcrumbIndex,
  { label: "curriculo", href: "/curriculo" },
];
