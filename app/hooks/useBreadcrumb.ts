import { useOutletContext } from "@remix-run/react";
import type { LayoutContextProps } from "~/components/layout/Layout";

export function useBreadcrumb() {
  return useOutletContext<LayoutContextProps>();
}