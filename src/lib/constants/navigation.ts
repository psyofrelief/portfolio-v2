type FooterLinkItem = {
  label: string;
  href: string;
  trueLink?: boolean;
};

type FooterCategory = {
  category: string;
  links: FooterLinkItem[];
};
export const FOOTER_LINKS: FooterCategory[] = [
  {
    category: "Sitemap",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Works", href: "/works" },
      { label: "Grid", href: "/grid" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    category: "Follow",
    links: [
      { label: "GitHub", href: "https://github.com/psyofrelief" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/faried-idris" },
    ],
  },
  {
    category: "Legal",
    links: [
      { label: "Terms Of Use", href: "/terms-of-use" },
      { label: "Privacy Policy", href: "privacy-policy" },
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Grid", href: "/grid" },
  { label: "Contact", href: "/contact" },
] as const;
