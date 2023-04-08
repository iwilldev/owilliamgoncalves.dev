import { Link, useNavigation } from "@remix-run/react";
import type { BreadcrumbProps } from "~/utils/types";

export function Navbar({
  breadcrumb,
  toggleMenu,
}: {
  breadcrumb: BreadcrumbProps[];
  toggleMenu: () => void;
}) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="navbar fixed bottom-0 z-20 justify-between border-b-0 border-t-[1px] border-base-content border-opacity-50 bg-base-300 lg:bottom-auto lg:top-0 lg:border-b-[1px] lg:border-t-0">
      <div className="flex-1 px-2 lg:flex-none">
        {breadcrumb.map((item, index) => (
          <div
            key={index}
            className={`inline-block ${
              index > 1 ? "max-w-[20vw] truncate" : ""
            }`}
            title={item.label}
          >
            <Link to={item.href} className="gh-link text-lg font-medium">
              {index > 0 && "/"}
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      {isLoading ? (
        <progress className="progress progress-primary absolute left-3/4 top-1/2 mx-auto w-6 -translate-y-1/2 translate-x-3/4 lg:left-1/2 lg:w-24 lg:-translate-x-1/2"></progress>
      ) : null}
      <label
        className="btn-primary btn-ghost btn-circle btn"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
    </div>
  );
}
