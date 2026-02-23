import ProjectItem from "@/components/projects/ProjectItem";
import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import { PROJECT_ITEMS } from "@/lib/constants/projects";

export default async function Works() {
  const projects = PROJECT_ITEMS;

  return (
    <Section className="gap-y-sm flex flex-col">
      <Heading label="All Works" />
      <ul className="gap-x-xs gap-y-xl grid grid-cols-1 sm:grid-cols-3">
        {projects.map((p) => (
          <ProjectItem key={p.id} cover={p.image.cover} {...p} />
        ))}
      </ul>
    </Section>
  );
}
