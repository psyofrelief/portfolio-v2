"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants/navigation";
import Link from "next/link";
import MenuTrigger from "../menu/MenuTrigger";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <nav
      className="sm:px-md px-sm py-sm text-foreground fixed top-0 right-0 left-0 z-4 flex w-full justify-between mix-blend-difference"
      data-theme="dark"
    >
      <Link href={"/"}>
        <p className="text-xs">FARIED IDRIS</p>
      </Link>
      <ul className="gap-x-sm hidden sm:flex">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>

      <MenuTrigger />
    </nav>
  );
}
