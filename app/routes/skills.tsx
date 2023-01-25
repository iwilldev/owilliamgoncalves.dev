import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import ogImage from "~/assets/meta/skills.jpg";
import { proSkills } from "~/data/pages/skills/pro";
import { beginnerSkills } from "~/data/pages/skills/beginner";
import { studySkills } from "~/data/pages/skills/study";
import { breadcrumbSkills } from "~/utils/breadcrumb";
import { useEffect } from "react";
import { SkillsPage } from "~/features/SkillsPage";
import { useLoaderData } from "@remix-run/react";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import type { SkillsPageProps } from "~/utils/types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Skills - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Ferramentas que já usei no trabalho, em projetos pessoais e que tenho estudado sobre",
  "og:image": `https://owilliamgoncalves.dev${ogImage}`,
  "og:title": "Skills",
  "og:description":
    "Ferramentas que já usei no trabalho, em projetos pessoais e que tenho estudado sobre",
  "og:url": "https://owilliamgoncalves.dev/skills",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async () => {
  return {
    proSkills,
    beginnerSkills,
    studySkills,
  };
};

export default function Sobre() {
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbSkills);
  }, []);
  const data = useLoaderData<SkillsPageProps>();
  return <SkillsPage data={data} />;
}
