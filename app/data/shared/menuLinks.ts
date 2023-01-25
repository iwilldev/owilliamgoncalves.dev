export interface MenuLinkProps {
  label: string;
  href: string;
}

const menuLinks: MenuLinkProps[] = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Currículo",
    href: "/curriculo",
  },
];

export default menuLinks;