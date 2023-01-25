import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ogImage from "~/assets/meta/curriculo.jpg";
import { courses } from "~/data/pages/curriculo/courses.server";
import { educations } from "~/data/pages/curriculo/educations.server";
import { experiences } from "~/data/pages/curriculo/experiences.server";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import { breadcrumbSobre } from "~/utils/breadcrumb";
import type { CurriculoPageProps } from "~/utils/types";
import { CurriculoPage } from "~/features/CurriculoPage";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Currículo - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description: "Minha trajetória e experiências até aqui",
  "og:image": ogImage,
  "og:title": "Currículo",
  "og:description": "Minha trajetória e experiências até aqui",
  "og:url": "https://owilliamgoncalves.dev/curriculo",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async () => {
  return json<CurriculoPageProps>({
    experiences,
    courses,
    educations,
  });
};

export default function Curriculo() {
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbSobre);
  }, []);
  const data = useLoaderData<CurriculoPageProps>();
  return <CurriculoPage data={data} />;
}
