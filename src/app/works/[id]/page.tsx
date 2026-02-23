import NextProjectSection from "@/components/sections/NextProjectSection";
import Section from "@/components/shared/Section";
import { PROJECT_ITEMS } from "@/lib/constants/projects";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function SingleWorkPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = PROJECT_ITEMS.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <>
      <Section className="gap-y-2xl flex flex-col pt-12!">
        <div className="gap-y-sm flex flex-col">
          <div className="bg-outline aspect-8/3 w-full" />
          <div className="flex justify-between">
            <p>{project.name}</p>
            <p className="max-w-100">{project.longDesc}</p>
            <div className="gap-x-lg flex">
              <p>Tech Stack</p>
              <ul>
                {project.content.techStack.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="gap-x-md flex">
              {project.links.source && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-foreground-secondary"
                  href={project.links.source}
                >
                  View Source
                </a>
              )}

              {project.links.website && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-foreground-secondary"
                  href={project.links.website}
                >
                  View Website
                </a>
              )}
            </div>
          </div>
        </div>
        {/* beneath info */}
        <div className="gap-x-xs flex h-[700px] w-full">
          {/* Wide Placeholder (left) */}
          <div className="h-full flex-[2] bg-black/10" />

          {/* Tall Placeholder (right) */}
          <div className="h-full flex-1 bg-black/10" />
        </div>

        <p className="ml-auto max-w-120">{project.content.paragraph}</p>

        <div className="gap-y-xs flex flex-col">
          <div className="gap-x-xs flex h-[700px] w-full">
            {/* Tall Placeholder (left) */}
            <div className="h-full flex-1 bg-black/10" />

            {/* Wide Placeholder (right) */}
            <div className="h-full flex-[2] bg-black/10" />
          </div>
          <div className="gap-x-xs flex h-[800px] w-full">
            {/* Wide Placeholder (right) */}
            <div className="h-full flex-[2] bg-black/10" />
          </div>
        </div>
      </Section>

      <NextProjectSection currentId={project.id} />
    </>
  );
}
