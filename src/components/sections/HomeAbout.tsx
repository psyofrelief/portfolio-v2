import { HOME_ABOUT_DATA } from "@/lib/constants/about";
import Section from "../shared/Section";
import Link from "next/link";
import Button from "../ui/Button";

export default function HomeAbout() {
  const data = HOME_ABOUT_DATA;
  return (
    <Section
      data-theme="dark"
      className="sm:gap-y-sm gap-y-2xl text-foreground flex flex-col justify-between sm:flex-row"
    >
      <div className="gap-y-sm flex flex-col">
        <p className="text-md max-w-220 font-light">{data.body[0]}</p>
        <Link href={"/about"} className="flex w-fit">
          <Button variant="outline">Learn more</Button>
        </Link>
      </div>

      <div className="gap-x-lg gap-y-md flex w-full max-w-120 flex-col justify-between sm:flex-row">
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
    </Section>
  );
}
