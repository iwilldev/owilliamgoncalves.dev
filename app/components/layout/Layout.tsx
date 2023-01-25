import { Outlet } from "@remix-run/react";
import { useState } from "react";
import type { BreadcrumbProps } from "~/utils/types";
import { LayoutBackground } from "./LayoutBackground";
import { LayoutNavbar } from "./LayoutNavbar";

export type LayoutContextProps = {
  breadcrumb: BreadcrumbProps[];
  setBreadcrumb: (breadcrumb: BreadcrumbProps[]) => void;
};

export default function Layout() {
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbProps[]>([
    { label: "owilliamgoncalves.dev", href: "/" },
  ]);
  return (
    <>
      <LayoutNavbar breadcrumb={breadcrumb} />
      <LayoutBackground />
      <div className="flex flex-1 flex-col items-center overflow-x-hidden">
        <Outlet context={{ breadcrumb, setBreadcrumb }} />
      </div>
    </>
  );
}
