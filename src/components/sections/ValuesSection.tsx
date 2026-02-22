import { ABOUT_VALUES_DATA } from "@/lib/constants/about";
import Section from "../shared/Section";
import Heading from "../ui/Heading";
import Headline from "../ui/Headline";

export default function ValuesSection() {
  const data = ABOUT_VALUES_DATA;
  return (
    <Section
      data-theme="dark"
      first
      className="gap-y-2xl border-t-outline text-foreground flex min-h-200 flex-col justify-between border-t"
    >
      <header className="gap-y-sm flex flex-col">
        <Heading label="My Values" />
        <Headline>
          Built on optimism. Driven by collaboration. Defined by craft.
        </Headline>
      </header>

      <div className="gap-y-md flex flex-col text-xs">
        {data.map((e, idx) => (
          <div
            key={idx}
            className="border-t-outline pt-sm grid w-full grid-cols-2 border-t"
          >
            <p className="">{e.category}</p>
            <ul className="text-foreground-secondary flex flex-col">
              {e.items.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
