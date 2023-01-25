import { useOutletContext } from "@remix-run/react";
import type { LayoutContextProps } from "~/utils/types";

export function useBreadcrumb() {
  return useOutletContext<LayoutContextProps>();
}