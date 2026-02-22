export interface SkillGroup {
  category: string;
  items: string[];
}

export interface HomeAboutContent {
  headline: string;
  body: string[];
  bannerImage: { src: string; alt: string };
  skills: SkillGroup[];
}

export const HOME_ABOUT_DATA: HomeAboutContent = {
  headline:
    "I build and support production web applications with a focus on startups and data migrations.",
  body: [
    "Behind every digital product is a complex architecture. My role is to bridge the gap between robust backend functionality and seamless frontend experiences. I build systems that go beyond aesthetics to solve real-world problems",
    "Whether it is developing TypeScript-based portals, managing complex SQL data migrations, or building with Next.js and Laravel — I create technical solutions that are distinct and built to last.",
  ],
  bannerImage: { src: "/images/about-hero.webp", alt: "Faried Idris Profile" },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "SQL", "Node.JS"],
    },
    {
      category: "Frameworks",
      items: ["React/React Native", "Next.Js", "Laravel"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    },
  ],
};

export interface AboutSection {
  category: string;
  items: string[];
}

export const ABOUT_PROFILE_DATA: AboutSection[] = [
  {
    category: "Status",
    items: [
      "Freelancing and open to new engineering opportunities.",
      "Location: Based in Perth, Western Australia.",
      "Focus: Refining workflows in Next.js and TypeScript.",
    ],
  },
  {
    category: "Skills",
    items: [
      "JavaScript",
      "TypeScript",
      "NextJS",
      "React/React Native",
      "SQL",
      "NodeJS",
      "Laravel",
    ],
  },
  {
    category: "Services",
    items: [
      "Frontend Development",
      "Backend Development",
      "Graphic Design",
      "Creative Direction",
    ],
  },
  {
    category: "Interests",
    items: ["Fashion", "Anthropology", "Design", "Combat Sports"],
  },
];

export const ABOUT_VALUES_DATA: AboutSection[] = [
  {
    category: "Scalable Architecture",
    items: [
      "Building robust, type-safe systems using TypeScript and SQL.",
      "Ensuring long-term maintainability for growing startup products.",
      "Optimizing backend logic for complex data migrations.",
    ],
  },
  {
    category: "User-Centric Engineering",
    items: [
      "Prioritizing performance and accessibility in every build.",
      "Bridging the gap between visual design and functional code.",
      "Delivering seamless experiences across all device types.",
    ],
  },
  {
    category: "Systematic Consistency",
    items: [
      "Developing reusable component libraries and design systems.",
      "Ensuring brand integrity across diverse technical platforms.",
      "Streamlining workflows to ship high-quality features faster.",
    ],
  },
  {
    category: "Cross-Functional Integration",
    items: [
      "Managing projects from initial brand identity to deployment.",
      "Translating complex business requirements into technical specs.",
      "Leading the intersection of creative direction and full-stack dev.",
    ],
  },
];
