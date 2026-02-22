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
      { label: "About", href: "/" },
      { label: "Memberships", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    category: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Tiktok", href: "https://tiktok.com" },
    ],
  },
  {
    category: "Location",
    links: [
      {
        label: "221B Baker Street,",
        href: "https://maps.google.com",
        trueLink: false,
      },
      {
        label: "Innaloo, WA 6018,",
        href: "https://maps.google.com",
        trueLink: false,
      },
      { label: "Australia", href: "https://maps.google.com", trueLink: false },
    ],
  },
  {
    category: "Contact Info",
    links: [
      { label: "hello@thepeak.com", href: "mailto:hello@thepeak.com" },
      { label: "+61 444 444 444", href: "tel:+61444444444" },
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
