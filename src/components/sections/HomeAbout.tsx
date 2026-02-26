import { HOME_ABOUT_DATA } from "@/lib/constants/about";
import Section from "../shared/Section";
import Heading from "../ui/Heading";
import Headline from "../ui/Headline";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import DotBackground from "../DotBackground";

export default function HomeAbout() {
  const data = HOME_ABOUT_DATA;
  return (
    <Section
      data-theme="dark"
      className="gap-y-sm text-foreground flex min-h-screen flex-col justify-between"
    >
      <div className="gap-y-md flex flex-col">
        <header className="gap-y-sm flex flex-col">
          <Heading label="What I Do" />
          <div className="flex items-end justify-between">
            <Headline>{data.headline}</Headline>
            <Link href={"/about"} className="flex w-fit">
              <Button variant="outline" className="flex-1">
                Learn more
              </Button>
            </Link>
          </div>
        </header>

        <DotBackground />
      </div>
      <div className="flex justify-between">
        <p className="text-md max-w-220 font-light">{data.body[0]}</p>

        <div className="gap-x-lg flex w-full max-w-120 justify-between">
          {data.skills.map((e, idx) => (
            <div key={idx} className="gap-y-xs flex flex-col">
              <p className="">{e.category}</p>
              <ul className="text-foreground-secondary flex flex-col">
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
