import { Link } from "@remix-run/react";
import type { BreadcrumbProps } from "~/utils/types";

export function LayoutNavbar({
  breadcrumb,
  toggleMenu,
}: {
  breadcrumb: BreadcrumbProps[];
  toggleMenu: () => void;
}) {
  return (
    <div className="navbar fixed bottom-0 z-20 border-b-0 border-t-[1px] border-base-content border-opacity-50 bg-base-300 lg:bottom-auto lg:top-0 lg:border-b-[1px] lg:border-t-0">
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
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-center divide-x">
          <div className="dropdown-end dropdown">
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
