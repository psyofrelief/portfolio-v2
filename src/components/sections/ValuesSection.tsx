import { ABOUT_VALUES_DATA } from "@/lib/constants/about";
import Section from "../shared/Section";
import Heading from "../ui/Heading";
import Headline from "../ui/Headline";
import DotBackground from "../DotBackground";
import { cn } from "@/lib/utils";

export default function ValuesSection() {
  const data = ABOUT_VALUES_DATA;
  return (
    <Section
      data-theme="dark"
      className="sm:gap-y-xl gap-y-md border-t-outline text-foreground flex flex-col justify-between border-t"
    >
      <header className="gap-y-sm flex flex-col">
        <Heading label="My Values" />
        <Headline>
          Built on optimism. Driven by collaboration. Defined by craft.
        </Headline>
      </header>
      <DotBackground />

      <div className="gap-y-md flex flex-col text-xs">
        {data.map((e, idx) => (
          <div
            key={idx}
            className={cn(
              "border-t-outline pt-sm grid w-full grid-cols-2 border-t",
              idx === 0 && "border-t-0 md:border-t",
            )}
          >
            <p className="">{e.category}</p>
            <ul className="text-foreground-secondary flex flex-col">
              {e.items.map((i, itemIdx) => (
                <li key={itemIdx}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
