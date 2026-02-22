import ValuesSection from "@/components/sections/ValuesSection";
import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import Headline from "@/components/ui/Headline";
import { ABOUT_PROFILE_DATA } from "@/lib/constants/about";

export default function About() {
  return (
    <>
      <Section
        data-theme="dark"
        className="text-foreground flex min-h-screen flex-col justify-between"
      >
        <div className="flex justify-between">
          <header className="gap-y-sm flex flex-col">
            <Heading label="About Me" />
            <Headline className="max-w-220">
              Faried has a keen eye for simple, gorgeous and dynamic user
              interfaces. He specialises in using modern frameworks to create
              online apps that are accessible and performant. He brings a
              meticulous approach to both programming and user experience,
              having worked in branding and visual design.
            </Headline>
          </header>
          <div className="aspect-3/4 h-auto w-50 bg-white/20" />
        </div>
        <div className="gap-md grid grid-cols-2 lg:grid-cols-4">
          {ABOUT_PROFILE_DATA.map((group) => (
            <div key={group.category} className="gap-y-sm flex flex-col">
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
        </div>
        <div className="size-0" />
      </Section>
      <ValuesSection />
    </>
  );
}
