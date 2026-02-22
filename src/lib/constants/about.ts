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
