import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: Props) {
  return (
    <li className="flex">
      <Link
        className="flex-1 text-xs whitespace-nowrap uppercase transition-opacity duration-300 group-hover/nav:opacity-50 hover:opacity-100!"
        href={href}
      >
        {label}
      </Link>
    </li>
  );
}
