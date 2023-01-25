import type { MetaFunction } from "@remix-run/node";
import { Link, useCatch } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./components/layout/Layout";
import styles from "./styles/app.css";
import ogImage from "./assets/meta/index.jpg";
import { Container } from "./components/layout/Container";
import { SectionLeft } from "./components/layout/SectionLeft";
import { SectionRight } from "./components/layout/SectionRight";
import { LayoutBackground } from "./components/layout/LayoutBackground";
import ronaldinho from "./assets/images/ronaldinho-gaucho.jpg";
import plift from "./assets/images/plift.jpg";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Carioca, Pai do Pedro, namorido da Laurinha, centralizador de div e flamenguista",
  "og:image": ogImage,
  "og:title": "William Gonçalves",
  "og:description":
    "Carioca, Pai do Pedro, namorido da Laurinha, centralizador de div e flamenguista",
  "og:url": "https://owilliamgoncalves.dev",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html lang="pt-br" className="h-full w-full">
      <head>
        <title>{caught.statusText}</title>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full w-full justify-center">
        <LayoutBackground />
        <Container>
          <SectionLeft>
            <h1 className="mt-auto text-4xl font-bold text-stone-400">
              Mermão! Que rolê foi esse?
            </h1>
            <p className="mt-10 text-xl text-stone-400">
              É estranho que tenhamos chegado até aqui. Como todos os scripts
              dessa página foram revisados em voz alta pelo Cidão Moreira, é
              provável que algum erro de digitação ou um problema de autorização
              tenha direcionado sua navegação pra cá. Mas relaxa!
            </p>
            <Link
              to="/"
              className="mt-5 mb-10 text-xl text-primary-content underline"
            >
              Clique aqui, para voltar do começo
            </Link>
            <pre>
              <code>Status: {caught.status}</code>
            </pre>
            <pre>
              <code>{JSON.stringify(caught.data, null, 2)}</code>
            </pre>
          </SectionLeft>
          <SectionRight>
            <img
              src={ronaldinho}
              alt=""
              className="ml-auto h-96 w-96 rounded-full object-cover object-top"
            />
          </SectionRight>
        </Container>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="pt-br" className="h-full w-full">
      <head>
        <title>{error.name}</title>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full w-full justify-center">
        <LayoutBackground />
        <Container>
          <SectionLeft>
            <h1 className="mt-auto text-4xl font-bold text-stone-400">
              Rapaz! Deu ruim...
            </h1>
            <p className="mt-10 text-xl text-stone-400">
              Tem um V8 rodando aqui embaixo. Mas parece que alguma coisa
              desconjuntou a rebimboca da parafuseta. O erro detalhado está logo
              abaixo.
            </p>
            <Link
              to="/"
              className="mt-5 mb-10 text-xl text-primary-content underline"
            >
              Clique aqui, para voltar do começo
            </Link>
            <code>{error.message}</code>
            <code>{JSON.stringify(error.stack, null, 2)}</code>
          </SectionLeft>
          <SectionRight>
            <img
              src={plift}
              alt=""
              className="rounded-box ml-auto h-96 w-96 object-cover object-top"
            />
          </SectionRight>
        </Container>
      </body>
    </html>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
}

export default function App() {
  return (
    <html lang="pt-br" className="h-full w-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-primary">
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
