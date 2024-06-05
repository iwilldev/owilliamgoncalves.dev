export interface MenuLinkProps {
  label: string;
  href: string;
}

const menuLinks: MenuLinkProps[] = [
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Links",
    href: "/links",
  },
];

export default menuLinks;