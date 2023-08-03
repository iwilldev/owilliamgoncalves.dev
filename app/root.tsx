import type { MetaFunction } from "@remix-run/node";
import { Outlet, useCatch } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { Navbar } from "./components/layout/Navbar";
import { useState } from "react";
import type { BreadcrumbProps } from "./utils/types";
import { Menu } from "./components/layout/Menu";
import { Main } from "./components/layout/Main";
import { Error } from "./components/boundaries/Error";
import { Catch } from "./components/boundaries/Catch";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "William Gonçalves",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Carioca, Pai do Pedro, namorido da Laurinha, centralizador de div e flamenguista",
  "og:image": `https://owillgoncalves.dev/assets/meta/index.jpg`,
  "og:title": "William Gonçalves",
  "og:description":
    "Carioca, Pai do Pedro, namorido da Laurinha, centralizador de div e flamenguista",
  "og:url": "https://owillgoncalves.dev",
  "og:site_name": "William Gonçalves",
  "og:type": "website",
});

export function CatchBoundary() {
  const caught = useCatch();
  return <Catch caught={caught} />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <Error error={error} />;
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
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbProps[]>([
    { label: "owillgoncalves.dev", href: "/" },
  ]);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setTimeout(() => {
      setMenuOpened(!menuOpened);
    }, 100);
  };
  return (
    <html lang="pt-br" className="h-full w-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full overflow-hidden bg-base-content">
        <Navbar breadcrumb={breadcrumb} toggleMenu={toggleMenu} />
        <Menu menuOpened={menuOpened} toggleMenu={toggleMenu} />
        <Main menuOpened={menuOpened}>
          <Outlet context={{ breadcrumb, setBreadcrumb }} />
        </Main>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
