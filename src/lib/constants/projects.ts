export interface ProjectItemData {
  id: string;
  idx: number;
  name: string;
  shortDesc: string;
  links: {
    source: string | null;
    website: string;
  };
  content: {
    paragraphs: string[];
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
    links: {
      source: "https://github.com/psyofrelief/exif-panel",
      website: "https://exifpanel.dev",
    },
    content: {
      paragraphs: [
        "ExifPanel was designed to provide developers and content producers with a powerful yet user-friendly tool for rapidly retrieving and presenting image metadata. It focuses on effectively parsing complex EXIF, IPTC, and XMP data encoded within digital photographs, providing important fields like location, exposure settings, and camera model in a clear, understandable format.",
        "The design and development process focused on accuracy, usability, and performance. To guarantee consistent behavior and seamless interactions, the frontend makes use of Next.js, TypeScript, and TailwindCSS. The backend uses a collection of API routes powered by libraries like sharp and exifr to process photos.",
      ],
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
    links: {
      source: null,
      website: "https://prekoda.com",
    },
    content: {
      paragraphs: [
        "Prekoda is a creative web and branding studio I founded to help businesses build fast, functional, and memorable digital experiences. The focus spans full-stack web development, digital branding, and scalable product design.",
        "I handle everything in-house, from initial strategy to deployment - ensuring each project meets both creative and technical goals. The studio runs on a modern stack including Laravel, Next.js, and Tailwind CSS.",
      ],
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
    links: {
      source: "https://github.com/psyofrelief/capblitz",
      website: "https://capblitz.com",
    },
    content: {
      paragraphs: [
        "CapBlitz is a responsive typing test built entirely with Next.js, Tailwind CSS, and TypeScript. Designed for public users, it delivers a clean and distraction-free interface that adapts seamlessly across devices.",
        "The interface was developed from scratch, with particular attention to performance and mobile interaction. syncing user input with visual feedback was the most complex challenge.",
      ],
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
    links: {
      source: "https://github.com/psyofrelief/pathsnap",
      website: "p-s.co",
    },
    content: {
      paragraphs: [
        "PathSnap is a custom-built link shortener designed for fast performance and ease of use. It allows users to create, manage, and share clean short URLs and QR codes through a modern interface.",
        "Built the frontend using Next.js, TypeScript, and TailwindCSS. On the backend, Laravel and MySQL handle routing, authentication, and link management via an API-first approach.",
      ],
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
    links: {
      source: null,
      website: "https://www.aywa2dawrld.com",
    },
    content: {
      paragraphs: [
        "AYWA is a culture-driven streetwear brand that needed a scalable ecommerce platform with a clear visual identity. The goal was to build a fast, reliable shopping experience that reflects the brand’s ambition.",
        "Developed a custom frontend using Next.js and Shopify’s Storefront API. Built backend services with Laravel to manage user data, subscriptions, and authentication.",
      ],
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
