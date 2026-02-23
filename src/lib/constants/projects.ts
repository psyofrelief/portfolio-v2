export interface ProjectItemData {
  id: string;
  idx: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  links: {
    source: string | null;
    website: string;
  };
  content: {
    paragraph: string;
    techStack: string[];
  };
  image: {
    cover: string;
    galleryBase: string;
  };
  config: {
    className?: string;
    featured?: boolean;
  };
}

export const PROJECT_ITEMS: ProjectItemData[] = [
  {
    id: "exifpanel",
    idx: 1,
    name: "ExifPanel",
    shortDesc: "EXIF Metadata Inspection Tool",
    longDesc:
      "A technical utility built to bridge the gap between raw binary image data and actionable insights. It leverages a high-performance parsing engine to extract nested EXIF and GPS data within a refined, developer-centric interface.",
    links: {
      source: "https://github.com/psyofrelief/exif-panel",
      website: "https://exifpanel.dev",
    },
    content: {
      paragraph:
        "ExifPanel was designed to provide developers and content producers with a powerful yet user-friendly tool for rapidly retrieving and presenting image metadata. It focuses on effectively parsing complex EXIF, IPTC, and XMP data encoded within digital photographs, providing important fields like location, exposure settings, and camera model in a clear, understandable format.",
      techStack: ["Next.js", "TypeScript", "Node.js", "TailwindCSS"],
    },
    image: {
      cover: "/images/projects/exifpanel/cover.webp",
      galleryBase: "/images/projects/exifpanel/gallery",
    },
    config: {
      featured: true,
    },
  },
  {
    id: "prekoda",
    idx: 2,
    name: "Prekoda",
    shortDesc: "Creative Web & Branding Agency",
    longDesc:
      "A creative studio focused on high-end branding and robust full-stack engineering. The platform utilizes a hybrid stack of Laravel and Next.js to deliver fluid, high-conversion digital experiences with a heavy emphasis on motion design.",
    links: {
      source: null,
      website: "https://prekoda.com",
    },
    content: {
      paragraph:
        "Prekoda is a creative web and branding studio I founded to help businesses build fast, functional, and memorable digital experiences. The focus spans full-stack web development, digital branding, and scalable product design.",
      techStack: ["Next.js", "Laravel", "MySQL", "GSAP"],
    },
    image: {
      cover: "/images/projects/prekoda/cover.webp",
      galleryBase: "/images/projects/prekoda/gallery",
    },
    config: {
      className: "max-w-[600px] justify-self-end",
      featured: true,
    },
  },
  {
    id: "capblitz",
    idx: 3,
    name: "CapBlitz",
    shortDesc: "Typing Test",
    longDesc:
      "A precision typing application engineered for low-latency visual feedback. It uses a custom TypeScript state management system to track WPM and keystroke dynamics within an intentionally minimalist, distraction-free environment.",
    links: {
      source: "https://github.com/psyofrelief/capblitz",
      website: "https://capblitz.com",
    },
    content: {
      paragraph:
        "CapBlitz is a responsive typing test built entirely with Next.js, Tailwind CSS, and TypeScript. Designed for public users, it delivers a clean and distraction-free interface that adapts seamlessly across devices.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    image: {
      cover: "/images/projects/capblitz/cover.webp",
      galleryBase: "/images/projects/capblitz/gallery",
    },
    config: {
      className: "max-w-[600px]",
      featured: true,
    },
  },
  {
    id: "pathsnap",
    idx: 4,
    name: "PathSnap",
    shortDesc: "Modern Link Shortener",
    longDesc:
      "An API-first URL management platform designed for maximum routing speed. It features a streamlined dashboard for managing dynamic QR codes and short links, backed by a robust Laravel and MySQL architecture.",
    links: {
      source: "https://github.com/psyofrelief/pathsnap",
      website: "p-s.co",
    },
    content: {
      paragraph:
        "PathSnap is a custom-built link shortener designed for fast performance and ease of use. It allows users to create, manage, and share clean short URLs and QR codes through a modern interface.",
      techStack: ["Next.js", "Laravel", "TypeScript", "MySQL"],
    },
    image: {
      cover: "/images/projects/pathsnap/cover.webp",
      galleryBase: "/images/projects/pathsnap/gallery",
    },
    config: {
      className: "justify-self-end max-w-[600px]",
      featured: false,
    },
  },
  {
    id: "aywa",
    idx: 5,
    name: "AYWA",
    shortDesc: "Culture-Inspired Streetwear",
    longDesc:
      "A headless e-commerce platform where culture meets modern web technology. By decoupling the frontend via Shopify’s Storefront API, the site achieves superior load speeds and supports bespoke user authentication logic.",
    links: {
      source: null,
      website: "https://www.aywa2dawrld.com",
    },
    content: {
      paragraph:
        "AYWA is a culture-driven streetwear brand that needed a scalable ecommerce platform with a clear visual identity. The goal was to build a fast, reliable shopping experience that reflects the brand’s ambition.",
      techStack: ["Next.js", "Laravel", "TypeScript", "MySQL", "Shopify API"],
    },
    image: {
      cover: "/images/projects/aywa/cover.webp",
      galleryBase: "/images/projects/aywa/gallery",
    },
    config: {
      featured: false,
    },
  },
];
