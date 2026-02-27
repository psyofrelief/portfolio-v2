import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default async function Grid() {
  return (
    <Section
      data-theme="dark"
      topSection
      className="gap-y-sm flex flex-col items-center"
    >
      <Heading label="Graphic Design Stuff" />
      <ul className="gap-y-sm flex flex-col">
        {[1, 2, 3, 4].map((p, idx) => (
          <Image
            src={`/images/playground/${p}.webp`}
            height={2275}
            loading="eager"
            priority
            width={1920}
            alt="graphic image"
            key={idx}
            className="max-w-100"
          />
        ))}
      </ul>
    </Section>
  );
}
