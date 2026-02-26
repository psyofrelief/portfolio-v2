import { PROJECT_ITEMS } from "@/lib/constants/projects";
import Section from "../shared/Section";
import ProjectItem from "../projects/ProjectItem";
import Heading from "../ui/Heading";

export default function FeaturedProjects() {
  const featured = PROJECT_ITEMS.filter((p) => p.featured).slice(0, 3);
  return (
    <Section className="gap-y-sm flex flex-col">
      <Heading label="Featured Works" />
      <ul className="gap-x-xs gap-y-lg grid grid-cols-1 sm:grid-cols-3">
        <ProjectItem cover={featured[0].image.cover} {...featured[0]} />
        <ProjectItem cover={featured[1].image.cover} {...featured[1]} />
        <ProjectItem cover={featured[2].image.cover} {...featured[2]} />
      </ul>
    </Section>
  );
}
