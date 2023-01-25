import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ogImage from "~/assets/meta/sobre.jpg";
import { aboutText1, aboutText2, aboutText3 } from "~/data/pages/sobre/text";
import {
  aboutBanger,
  aboutDesign,
  aboutFamilyImages,
} from "~/data/pages/sobre/images";
import { SobrePage } from "~/features/SobrePage";
import { useBreadcrumb } from "~/hooks/useBreadcrumb";
import { breadcrumbSobre } from "~/utils/breadcrumb";
import type { SobrePageProps } from "~/utils/types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sobre - William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Flamenguista e carioca, que divide a vida entre a Zona Oeste do Rio de Janeiro e a Zona Leste de São Paulo",
  "og:image": `https://owilliamgoncalves.dev${ogImage}`,
  "og:title": "Sobre",
  "og:description":
    "Flamenguista e carioca, que divide a vida entre a Zona Oeste do Rio de Janeiro e a Zona Leste de São Paulo",
  "og:url": "https://owilliamgoncalves.dev/sobre",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export const loader: LoaderFunction = async () => {
  return json<SobrePageProps>({
    aboutBanger,
    aboutDesign,
    aboutFamilyImages,
    aboutText1,
    aboutText2,
    aboutText3,
  });
};

export default function Sobre() {
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb(breadcrumbSobre);
  }, []);
  const data = useLoaderData<SobrePageProps>();
  return <SobrePage data={data} />;
}
