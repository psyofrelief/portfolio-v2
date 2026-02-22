"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <nav
      className="px-md py-sm text-foreground fixed top-0 right-0 left-0 flex w-full justify-between mix-blend-difference"
      data-theme="dark"
    >
      <p className="text-xs">FARIED IDRIS</p>
      {isHome && (
        <div className="flex flex-col text-xs leading-tight">
          <p className="max-w-65">Full Stack Engineer / Graphic Designer</p>
          <p className="text-foreground-secondary max-w-65">
            Experience delivering technical solutions from brand identity to
            complex system integrations.
          </p>
        </div>
      )}
      <ul className="gap-x-sm hidden sm:flex">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>
    </nav>
  );
}
