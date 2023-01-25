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
  {
    label: "Contatos / Links",
    href: "/links",
  },
];

export default menuLinks;