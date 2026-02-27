"use client";
import Link from "next/link";
import Heading from "../ui/Heading";
import MenuNavLink from "./MenuNavLink";
import { useMenuContext } from "@/contexts/menuContext";
import Button from "../ui/Button";
import { NAV_LINKS } from "@/lib/constants/navigation";

export default function MenuOverlay() {
  const { menuOpen, toggleMenu } = useMenuContext();

  return (
    menuOpen && (
      <menu
        data-theme="dark"
        className="text-foreground p-sm bg-background fixed inset-0 z-4 flex h-dvh flex-col justify-between pt-20"
      >
        <div className="bg-foreground absolute top-50 -right-70 size-100 rounded-full" />
        <div className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <MenuNavLink label={link.label} href={link.href} key={link.href} />
          ))}
        </div>
        <div className="gap-y-lg flex flex-col">
          <div className="gap-y-xs flex flex-col">
            <Heading label="Location" />
            <p>Perth, WA, Australia</p>
          </div>
          <div className="gap-y-xs flex flex-col">
            <Heading label="Info" />
            <div className="flex flex-col">
              <a href="mailto:info@faried.net" rel="noreferrer" target="_blank">
                info@faried.net
              </a>
              <a
                href="https://www.linkedin.com/in/faried-idris"
                rel="noreferrer"
                target="_blank"
              >
                /in/faried-idris
              </a>
            </div>
          </div>
        </div>
        <div
          data-theme="light"
          className="bg-foreground p-sm text-background gap-y-md flex flex-col rounded"
        >
          <div className="flex flex-col">
            <p>Believe in the power of design</p>
            <p className="font-light">
              Collab with the best, I’m always available for a short chat if you
              are. Work with the best.
            </p>
          </div>
          <Link href={"/about"} onClick={toggleMenu} className="flex max-w-fit">
            <Button className="bg-background text-foreground flex-1">
              Contact me
            </Button>
          </Link>
        </div>
      </menu>
    )
  );
}
