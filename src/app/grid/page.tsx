import ProjectItem from "@/components/projects/ProjectItem";
import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default async function Grid() {
  return (
    <Section data-theme="dark" topSection className="gap-y-sm flex flex-col">
      <Heading label="Graphic Design Stuff" />
      <ul className="gap-y-sm flex flex-col">
        {[1, 2, 3, 4].map((p, idx) => (
          <Image
            src={`/images/playground/${p}.webp`}
            height={2275}
            width={1920}
            alt="graphic image"
            key={idx}
          />
        ))}
      </ul>
    </Section>
  );
}
