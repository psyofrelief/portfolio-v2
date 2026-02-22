import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedProjects />
      <HomeAbout />
    </main>
  );
}
