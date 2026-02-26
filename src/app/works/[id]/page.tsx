import NextProjectSection from "@/components/sections/NextProjectSection";
import Section from "@/components/shared/Section";
import { PROJECT_ITEMS } from "@/lib/constants/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function SingleWorkPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = PROJECT_ITEMS.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <>
      <Section className="gap-y-2xl sm:pb-md flex flex-col pt-12!">
        <div className="gap-y-sm flex flex-col">
          <Image
            src={`${project.image.galleryBase}/1.webp`}
            width={2560}
            height={1280}
            loading="eager"
            priority
            alt="cover image"
          />
          <div className="gap-y-sm flex flex-col justify-between sm:flex-row">
            <p className="font-bold sm:font-normal">{project.name}</p>
            <p className="max-w-100">{project.longDesc}</p>
            <div className="gap-x-md flex sm:hidden">
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
            <div className="gap-x-lg border-t-outline mt-lg pt-xs flex justify-between border-t sm:mt-0 sm:justify-start sm:border-none sm:pt-0">
              <p>Tech Stack</p>
              <ul className="text-end">
                {project.content.techStack.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="gap-x-md hidden sm:flex">
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

        <div className="gap-y-xs flex flex-col">
          <Image
            src={`${project.image.galleryBase}/5.webp`}
            width={2560}
            height={1920}
            alt="cover image"
          />

          <Image
            src={`${project.image.galleryBase}/2.webp`}
            width={2560}
            height={1280}
            alt="cover image"
          />
        </div>
        <p className="sm:text-md ml-auto max-w-220 sm:font-light">
          {project.content.paragraph}
        </p>
        <div className="gap-y-xs flex flex-col">
          <Image
            src={`${project.image.galleryBase}/3.webp`}
            width={2560}
            height={1280}
            alt="cover image"
          />
          <Image
            src={`${project.image.galleryBase}/4.webp`}
            width={2560}
            height={1709}
            alt="cover image"
          />
        </div>
      </Section>

      <NextProjectSection currentId={project.id} />
    </>
  );
}
