"use client";
import { PROJECT_ITEMS } from "@/lib/constants/projects";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import Section from "../shared/Section";
import ProjectItem from "../projects/ProjectItem";
import Button from "../ui/Button";

export default function NextProjectSection({
  currentId,
}: {
  currentId: string;
}) {
  const currentIndex = PROJECT_ITEMS.findIndex((p) => p.id === currentId);
  if (currentIndex === -1) return null;

  const nextProject = PROJECT_ITEMS[(currentIndex + 1) % PROJECT_ITEMS.length];

  if (!nextProject) return null;

  return (
    <Section
      data-theme="dark"
      className="text-foreground bg-background flex justify-between"
    >
      <div className="flex flex-col justify-between">
        <p className="text-xl font-light">Next project</p>
        <Link aria-label="View All Projects" href="/works">
          <Button variant="outline" className="flex-1">
            View All Projects
          </Button>
        </Link>
      </div>

      <ProjectItem
        data-theme="dark"
        cover={nextProject.image.cover}
        {...nextProject}
      />
    </Section>
  );
}
