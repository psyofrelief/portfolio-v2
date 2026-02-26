"use client";
import { PROJECT_ITEMS } from "@/lib/constants/projects";
import Link from "next/link";
import Section from "../shared/Section";
import ProjectItem from "../projects/ProjectItem";
import Heading from "../ui/Heading";

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
    <div className="px-md flex">
      <Section
        data-theme="dark"
        className="text-foreground bg-background sm:py-md gap-2xl flex justify-between rounded-md"
      >
        <div className="gap-sm flex flex-col justify-between">
          <Heading label="Next Project" />

          <Link
            href={"/works"}
            aria-label="View all projects"
            className="text-3xl text-xl font-light underline underline-offset-8"
          >
            View all projects →
          </Link>
        </div>

        <div className="flex max-w-100">
          <ProjectItem
            data-theme="dark"
            outline
            eagerLoad={false}
            cover={nextProject.image.cover}
            {...nextProject}
          />
        </div>
      </Section>
    </div>
  );
}
