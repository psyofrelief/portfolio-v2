"use client";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants/navigation";
import Link from "next/link";
import MenuTrigger from "../menu/MenuTrigger";
import { useMenuContext } from "@/contexts/menuContext";

export default function Navbar() {
  const { menuOpen, toggleMenu } = useMenuContext();
  return (
    <nav
      className="sm:px-md px-sm py-sm text-foreground fixed top-0 right-0 left-0 z-4 flex w-full justify-between mix-blend-difference"
      data-theme="dark"
    >
      <Link href={"/"} onClick={() => menuOpen && toggleMenu()}>
        <p className="text-xs">FARIED IDRIS</p>
      </Link>

      <ul className="group/nav gap-x-sm hidden sm:flex">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>

      <MenuTrigger />
    </nav>
  );
}
