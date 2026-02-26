import { useMenuContext } from "@/contexts/menuContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

export default function MenuNavLink({ label, href }: Props) {
  const pathname = usePathname();
  const { closeMenu } = useMenuContext();

  return (
    <li
      onClick={closeMenu}
      className={cn("text-2xl", pathname === href && "italic")}
    >
      <Link href={href} className="flex flex-1 justify-between">
        <p className="gap-x-xs flex flex-1 leading-none font-light">
          {label}{" "}
          {label === "Projects" && (
            <span className="mb-md text-accent text-sm">(4)</span>
          )}
        </p>
      </Link>
    </li>
  );
}
