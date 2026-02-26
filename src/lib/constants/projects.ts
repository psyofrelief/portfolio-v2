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
  featured?: boolean;
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
      cover: "/images/works/exifpanel/cover.webp",
      galleryBase: "/images/works/exifpanel/gallery",
    },
    featured: true,
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
      cover: "/images/works/prekoda/cover.webp",
      galleryBase: "/images/works/prekoda/gallery",
    },
    featured: true,
  },
  {
    id: "puretype",
    idx: 3,
    name: "PureType",
    shortDesc: "Typing Test",
    longDesc:
      "A precision typing application engineered for low-latency visual feedback. It uses a custom TypeScript state management system to track WPM and keystroke dynamics within an intentionally minimalist, distraction-free environment.",
    links: {
      source: "https://github.com/psyofrelief/puretype",
      website: "https://puretype.vercel.app",
    },
    content: {
      paragraph:
        "PureType, a high-performance typing application built with Next.js, Tailwind CSS, and TypeScript, was developed to provide users with a minimalist and distraction-free environment for speed training. I architected a robust global state management system using React Context to synchronize real-time performance metrics, persistent user settings, and dynamic paragraph generation without compromising UI fluidness.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    image: {
      cover: "/images/works/puretype/cover.webp",
      galleryBase: "/images/works/puretype/gallery",
    },
    featured: true,
  },
  {
    id: "scantek",
    idx: 4,
    name: "Scantek",
    shortDesc: "Digital Identity Verification",
    longDesc:
      "A refined WordPress and Elementor site for an identity tech leader, optimized for WCAG compliance, brand consistency, and secure HubSpot integration.",
    links: {
      source: null,
      website: "https://www.scantek.com",
    },
    content: {
      paragraph:
        "I took over an incomplete and visually erratic WordPress site for Scantek, Australia's leader in identity management, to resolve critical accessibility and technical debt. I refined the UI for WCAG compliance and visual consistency while stabilizing the core build by fixing broken HubSpot integrations, responsive menus, and security vulnerabilities. The result was a performant and professional platform that fully aligned with their established brand identity.",
      techStack: ["WordPress", "Elementor", "CSS", "Figma"],
    },
    image: {
      cover: "/images/works/scantek/cover.webp",
      galleryBase: "/images/works/scantek/gallery",
    },
    featured: false,
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
      website: "https://www.aywa2dawrld.net",
    },
    content: {
      paragraph:
        "I developed a comprehensive visual identity for AYWA, a culture driven streetwear brand, focusing on establishing a scalable and impactful brand presence. My work centered on creating a bespoke logo and a cohesive branding system designed to reflect the brand's creative ambition and urban influence. By prioritizing a clean yet bold aesthetic, I ensured the identity remained versatile across various digital and physical mediums, providing AYWA with a professional foundation for its expansion into the competitive streetwear market.",
      techStack: ["Figma", "Illustrator", "Photoshop"],
    },
    image: {
      cover: "/images/works/aywa/cover.webp",
      galleryBase: "/images/works/aywa/gallery",
    },
    featured: false,
  },
];
