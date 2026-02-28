import ValuesSection from "@/components/sections/ValuesSection";
import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import Headline from "@/components/ui/Headline";
import { ABOUT_PROFILE_DATA } from "@/lib/constants/about";
import Image from "next/image";
import ProfileGrid from "@/components/animations/ProfileGrid";

export default function About() {
  return (
    <>
      <Section
        data-theme="dark"
        className="text-foreground sm:gap-y-md gap-y-xl flex min-h-screen flex-col justify-between"
        topSection
      >
        <div className="gap-y-lg flex flex-col sm:flex-row sm:justify-between">
          <header className="gap-y-sm flex flex-col">
            <Heading label="About Me" />
            <Headline className="max-w-244">
              Faried has a keen eye for simple, gorgeous and dynamic user
              interfaces. He specialises in using modern frameworks to create
              online apps that are accessible and performant. He brings a
              meticulous approach to both programming and user experience,
              having worked in branding and design.
            </Headline>
          </header>
          <Image
            src="/images/about.webp"
            width={800}
            height={1200}
            priority
            sizes="(max-width: 640px) 100vw, 280px"
            alt="Faried Idris"
            className="h-auto w-full sm:max-w-70"
          />{" "}
        </div>

        {/* Animation Target Grid */}
        <ProfileGrid>
          {ABOUT_PROFILE_DATA.map((group) => (
            <div
              key={group.category}
              className="profile-data-box reveal-mask gap-y-sm flex flex-col"
            >
              <h3 className="text-foreground-secondary text-xs uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ProfileGrid>
        <div className="size-0" />
      </Section>

      <ValuesSection />
    </>
  );
}
