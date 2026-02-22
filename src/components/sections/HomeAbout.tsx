import { HOME_ABOUT_DATA } from "@/lib/constants/about";
import Section from "../shared/Section";
import Heading from "../ui/Heading";
import Headline from "../ui/Headline";
import Link from "next/link";
import Button from "../ui/Button";

export default function HomeAbout() {
  const data = HOME_ABOUT_DATA;
  return (
    <Section
      data-theme="dark"
      first
      className="gap-y-sm text-foreground flex min-h-screen flex-col justify-between pt-12!"
    >
      <div className="gap-y-md flex flex-col">
        <header className="gap-y-sm flex flex-col">
          <Heading label="What I Do" />
          <Headline>{data.headline}</Headline>
        </header>

        <div className="h-50 w-full bg-orange-600" />
      </div>
      <div className="flex items-end justify-between">
        <div className="gap-y-md flex flex-col">
          <div className="gap-x-md grid max-w-235 grid-cols-2">
            {data.body.map((e, idx) => (
              <p key={idx}>{e}</p>
            ))}
          </div>

          <Link href={"/about"} className="flex w-fit">
            <Button variant="outline" className="flex-1">
              Learn more
            </Button>
          </Link>
        </div>
        <div className="gap-y-md grid grid-cols-1">
          {data.skills.map((e, idx) => (
            <div
              key={idx}
              className="gap-y-xs flex flex-col items-end text-right"
            >
              <p className="">{e.category}</p>
              <ul className="text-foreground-secondary flex flex-col items-end">
                {e.items.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
